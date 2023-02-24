const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");
const { BadRequest } = require("../utils/error");


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


async function login(req, res, next) {
      passport.authenticate("local", (err, user, info) => {
        if (err || !user) {
          console.log("no user with that info");
          res.status(401).send(info.message);

        } else {
          //req.login uses serialized function
          req.login(user, function (error) {
            if (err) {
              return next(error);
            }
            console.log(("in login"))
            res.status(200).json({
              email: user.email,
              name: user.name,
            });
          });
        }
      })(req, res, next)
      };
  //passport.authenticate( function is written in the passport-config file
  


async function register(req, res, next) {
  console.log("i'm in register func");
  const { name, email, password } = req.body;
  try {
    if (!name || !password || !email) {
      throw new BadRequest(
        "Missing required fields: name, email, or password."
      );
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // return res.status(400).send(`Email <${req.body.email}> already taken`);
      throw new BadRequest("Email is taken! Please use another email address or Login");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      console.log(newuser);
      //Auto-login
      //use passport part to add new user data by the moment he's registered
      req.login(newuser, function (err) {
        if (err) {
          next(err);
        }
        res.status(200).json({
          //sends these properties to the session
          email: newuser.email,
          name: newuser.name,
        });
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}


function getUser(req, res) {
  res.status(200).json({
    email: req.user.email,
    name: req.user.name,
  });
}

module.exports = { getUser, login, logout, register };
