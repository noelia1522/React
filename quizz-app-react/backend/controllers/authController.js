const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require("passport");
const {BadRequest} = require('../utils/error')

function logout(req, res, next) {
  req.logout() //delete the request.session.passport property from the session
  res.clearCookie("connect.sid", { path: "/" });

  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({message:"logged out!"});
  });
}


function login(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    console.log(user);
    if (err || !user) {
      // next(err)
      console.log("passport authenticate says", info.message)
      //throw new BadRequest("Missing required field: password, or email")
      res.status(401).send({message: "Missing required field: email or password"});
    } else {
      console.log("user found")
      // if user authenticated, maintain in the session
      //Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session.
      //When the login operation completes, user will be assigned to req.user
      //Note: passport.authenticate() middleware invokes req.login() automatically.
      //https://github.com/jaredhanson/passport/blob/master/lib/http/request.js
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          email: user.email,
          name: user.name,
        });
      });
    }
  })(req, res, next);

}

  async function register(req, res, next) {
    const {name, email, password} = req.body;
    try{
    if(!name || !email || !password){
      console.log("here in register ");
      // res.status(400).json({message:"Missing required field: name, password, or email"});
     throw new BadRequest("Missing required field: name, password, or email");
    //  next(error)
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new BadRequest("Email is taken. Plaese use another email address.");
      // return res.status(400).send({message:`Email already taken. Plaese use another email address.`});
    }

    else {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)


      const newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      //Auto-login after registering
          req.login(newuser, function (err) {

            if (err) {
              next(err);
            }
            res.status(200).json({
              email: newuser.email,
              name: newuser.name,
            });
          });
	}
    }
  catch(error) {
      console.log(error)
      next(error);
    }
  };


  function getUser(req, res) {
    // console.log("here in getUser");
    // console.log(req.user);
    res.status(200).json({
    	email: req.user.email,
      name: req.user.name
  	});
  };



  module.exports = {getUser, login, logout, register};