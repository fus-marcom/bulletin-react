const passwordless = require('passwordless')
const MongoStore = require('passwordless-mongostore')
const { transport } = require('./email')
const template = require('./template')

module.exports = app => {
  var pathToMongoDb = process.env.DB_HOST
  passwordless.init(new MongoStore(pathToMongoDb))

  passwordless.addDelivery(
    async (tokenToSend, uidToSend, recipient, callback) => {
      const host = 'localhost:8080'
      const link = `http://${host}/logged_in?token=${tokenToSend}&uid=${encodeURIComponent(
        uidToSend
      )}`
      const body = `Hi! Access Your account here: <a href="${link}">Click Me</a> or goto ${link}`
      transport.sendMail(
        {
          html: template('Login', 'Click', body),
          from: 'test@test.com',
          to: recipient,
          subject: 'Token for ' + host
        },
        function (err, message) {
          if (err) {
            console.log(err)
          }
          callback(err)
        }
      )
    }
  )

  app.use(passwordless.sessionSupport())

  app.get('/logged_in', passwordless.acceptToken(), function (req, res) {
    res.redirect('http://localhost:3000')
  })

  app.post(
    '/sendtoken',
    passwordless.requestToken(function (user, delivery, callback, req) {
      if (user.endsWith('franciscan.edu')) {
        callback(null, user)
      } else {
        callback(null, null)
      }
    }),
    function (req, res) {
      // success!
      res.json({
        ok: true
      })
    }
  )

  app.get('/logout', passwordless.logout(), (req, res) => {
    res.redirect('http://localhost:3000/login')
  })

  app.get('/check_auth', (req, res) => {
    if (req.user) res.json({ ok: true })
    else res.json({ ok: false })
  })
}
