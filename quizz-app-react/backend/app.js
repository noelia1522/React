const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
//it creates a session
const session = require("express-session");
const MongoStore = require("connect-mongo");
const initializePassport = require("./config/passport-config");
const passport = require("passport");
const authRouter = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");

initializePassport(passport);
dotenv.config();
//json middleware
app.use(express.json());
//for the post request
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", true);

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_DB,
  collection: "sessions",
});
//this session gets an object
app.use(
  session({
    secret: process.env.SECRET, //encription of messages inside the session
    resave: false,
    saveUninitialized: false, //we don't save the session if its not initialized
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", authRouter);
app.use(errorHandler);

//app.get("/", (req, res) => {
 // if (req.session.viewCount) req.session.viewCount++;
 // else req.session.viewCount = 1;
 // res.json({ message: "home page" });
 // console.log(req.session);
//});

//to connect to the database
const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  //it's asynchronous accesing to database so we use the then
  .then(() => {
    console.log("Connected to the Database succesfully");
    app.listen(port, "localhost", (err) => {
      if (err) {
        console.log(`Server could not be started, ${err}`);
      } else console.log(`Server is running on port: ${port}...`);
    });
  })

  .catch((err) => { 
    console.log("Database connection error!");
    console.log(err);
  });


