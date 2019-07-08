require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

// Login Routes
const loginRouter = require("./routes/userLoginRoutes");

// Middleware
app.use(helmet());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("build"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Sessions ===============================================
app.use(session({
  secret: process.env.SESSIONSECRET || "cat",
  resave: false,
  saveUninitialized: true
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function userSetup(req, res, next) {
  if (!req.session.user) {
    req.session.user = {};
    // req.session.user.loggedIn = false;
  }
  next();
}

//using middlewhere acrossed the entire application before any route gets hit.
app.use(userSetup);

// route to handle user registration
app.use("/", loginRouter);

// Routes
require("./routes/api-User-Routes")(app);
require("./routes/api-Pet-Routes")(app);
require("./routes/api-Review-Routes")(app);
require("./routes/api-Posts-Routes")(app);

const syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

module.exports = app;
