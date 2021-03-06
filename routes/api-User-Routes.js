
/* eslint-disable camelcase */
const db = require("../Models");
// const connection = require("../config/connection.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;


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
        client_type: "serviceProvider"
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get pet owners users
  app.get("/api/users/owners", function (req, res) {
    db.User.findAll({
      where: {
        client_type: "petOwner"
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get users by role
  app.get("/api/users/role/:role", function (req, res) {
    db.User.findAll({
      where: {
        role: req.params.role
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

  // Get one user
  app.get("/api/users/image/:id", function (req, res) {
    db.User.findOne(
      {
        attributes: ['id', 'image'],
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    let password = req.body.newUser.password;
    bcrypt.hash(password, saltRounds)
      .then(function (hash) {
        req.body.newUser.password = hash;
        db.User.create(req.body.newUser).then(function (dbUser) {
          console.log("dbUser from .create: ", dbUser.dataValues);
          res.json(dbUser);
        });
      });
    console.log("api/user info: ", req.body.newUser);
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
    console.log("api-user-routes getSession data: ", req.session.user);
    res.json(req.session.user);
  });

}; 
