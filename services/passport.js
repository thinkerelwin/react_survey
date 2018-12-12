const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  // user.id refer to id that are generated from mongoDB in mLab
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use
  (new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken)
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => {
              done(null, user)
            })
        }
      })
      .catch(err => {
        console.log(err);
      });
  })
)