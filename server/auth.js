const MicrosoftStrategy = require('passport-windowslive').Strategy

module.exports = passport => {
  passport.use(
    new MicrosoftStrategy(
      {
        clientID: process.env.MICROSOFT_APP_ID,
        clientSecret: process.env.MICROSOFT_APP_SECRET,
        callbackURL: process.env.MICROSOFT_CALLBACK_URL,
        scope: ['wl.signin', 'wl.basic', 'wl.emails']
      },
      function (accessToken, refreshToken, profile, done) {
        for (let email of profile.emails) {
          if (email.value.endsWith('franciscan.edu')) {
            return done(null, profile.id)
          }
        }
        return done(null, false)
      }
    )
  )

  passport.serializeUser(function (id, done) {
    done(null, id)
  })

  passport.deserializeUser(function (id, done) {
    return done(null, id)
  })
}
