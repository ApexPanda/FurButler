
/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

var bcrypt = require("bcrypt");
var saltRounds = 10;


module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get service users
  app.get("/api/users/service", function (req, res) {
    db.User.findAll({
      where: {
        service_provider: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get pet owners users
  app.get("/api/users/owners", function (req, res) {
    db.User.findAll({
      where: {
        pet_owner: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get one user
  app.get("/api/users/:id", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    var password = req.body.password;
    bcrypt.hash(password, saltRounds)
      .then(function (hash) {
        req.body.password = hash;
        db.User.create(req.body).then(function (dbUser) {
          console.log("dbUser from .create: ", dbUser);
          res.json(dbUser);
        });
      });
    console.log("api/user info: ", req.body);
  });

  // update user
  app.put("/api/user/update", function (req, res) {
    console.log(req.body);
    db.User.update(
      req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  // Send session data to front-end
  app.get("/api/session", function (req, res) {
    res.json(req.session.user);
  });

}; 
