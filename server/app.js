require('dotenv').config({
  path: `${__dirname}/.env`
})
const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require('graphql-tools')
const fetch = require('node-fetch')
const cors = require('cors') // Cors origin policy
const mail = require('./email')
const multer = require('multer')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passwordless = require('passwordless')

const multerOptions = {
  storage: multer.memoryStorage()
}

const fetcher = async ({ query, variables, operationName, context }) => {
  const fetchResult = await fetch(
    'https://test1.jesseweigel.com/demo/graphql',
    {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json'
        /* MAKE AUTHORIZATION SOMEHOW for the wordpress */
        /* GO WITH JWT OR OAUTH 2.0. OAUTH 2.0 Recommended */
        //  'Authentication': `Bearer ${context.authKey}`,
      },
      body: JSON.stringify({ query, variables, operationName })
    }
  )
  return fetchResult.json()
}

const PORT = process.env.PORT || 8080

const app = express()
const whitelist = [
  // Allow domains here
  // Remember to add your react site at last
  // Cors will also protect the api
  'http://localhost:3000'
]
const corsOptions = {
  origin (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    cookie: {
      maxAge: 100 * 60 * 60 * 24 * 30 * 12 // 1 year
    },
    saveUninitialized: false,
    store: new MongoStore({ url: process.env.DB_HOST })
  })
)

require('./auth')(app)
/*
FOR AUTHENTICATION I WILL GO FOR THIS APPROACHs
app.use('*', ssoAuthenticationMiddleware)
*/

// Graphiql GUI for API Testing...
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.post(
  '/email_announcement',
  multer(multerOptions).any('upload'),
  async (req, res) => {
    try {
      const info = await mail(
        'someone@gmail.com', // Get it from login session
        req.body.title,
        req.body.announcement,
        req.files
      )
      res.json({ ok: true, ...info })
    } catch (error) {
      res.json({ ok: false, ...error })
    }
  }
)

// Making WP API Available by using remote gql server strategy
introspectSchema(fetcher)
  .then(schema => {
    const gqlschema = makeRemoteExecutableSchema({
      schema,
      fetcher
    })
    app.use(
      '/graphql',
      passwordless.restricted(),
      bodyParser.json(),
      graphqlExpress({ schema: gqlschema })
    )
    app.listen(PORT, () => console.log(`Server Started on PORT -> ${PORT}`))
  })
  .catch(err => {
    console.log(`Connection Error -> ${err}`)
  })
