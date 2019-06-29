/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all posts
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Get posts based on owner id
  app.get("/api/posts/:owner_id", function (req, res) {
    db.Post.findAll({
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // Create a new post
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};