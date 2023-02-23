const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt= require('bcrypt')

function initialize(passport){
  passport.use(new LocalStrategy({usernameField: "email"}, authenticateUser ))

  async function authenticateUser(email, password, done) {
    const user = await User.findOne({email: email});

    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.serializeUser((user, done)=>{
    return done(null, user.id);

  })
  passport.deserializeUser(async (id, done)=>{
   const user = await User.findOne({_id: id});
   return done(null, user);

  })

}
module.exports = initialize;
