const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");



function logout(req, res, next) {
    //removes the passport property session from the database removes data from database
  req.logout();
  //this clears the data from the session inside the browser
  res.clearCookie("connect.sid", { path: "/" });


  //destroys the session
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "logged out!" });
  });
}

function login(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err || !user) {
      res.status(401).send(info.message);
    } else {
      req.login(user, function (error) { 
        if (err) {
          return next(error);
        }

        res.status(200).json({
          email: user.email,
          name: user.name,
        });
      });
    }
  });
}

async function register(req, res, next) {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send(`Email <${req.body.email}> already taken`);
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      //Auto-login
      req.login(newuser, function (err) {
        if (err) {
          next(err);
        }
        res.status(200).json({
          email: newuser.email,
          name: newuser.name,
        });
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

function getUser(req, res) {
  res.status(200).json({
    email: req.user.email,
    name: req.user.name,
  });
}

module.exports = { getUser, login, logout, register };
