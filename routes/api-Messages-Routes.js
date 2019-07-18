/* eslint-disable camelcase */
const db = require("../Models");
// const connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all messages
  app.get("/api/messages", function (req, res) {
    db.Messages.findAll({}).then(function (dbMessages) {
      res.json(dbMessages);
    });
  });

  // Get messages based on owner id
  app.get("/api/messages/:owner_id", function (req, res) {
    db.Messages.findAll({
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbMessages) {
      res.json(dbMessages);
    });
  });

  // Create a new messages
  app.post("/api/messages", function (req, res) {
    db.Messages.create(req.body).then(function (dbMessages) {
      res.json(dbMessages);
    });
  });

  // update messages
  app.put("/api/messages/update", function (req, res) {
    console.log(req.body);
    db.Messages.update(
      req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbMessages) {
        res.json(dbMessages);
      });
  });

  // deletes message based on owner id
  app.delete("/api/messages/:id", function (req, res) {
    db.Messages.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbMessages) {
      res.json(dbMessages);
    });
  });

};