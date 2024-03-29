/* eslint-disable camelcase */
const db = require("../Models");
// var connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all reviews
  app.get("/api/reviews", function (req, res) {
    db.Review.findAll({}).then(function (dbReview) {
      res.json(dbReview);
    });
  });

  // Get reviews based on owner id
  app.get("/api/reviews/:owner_id", function (req, res) {
    db.Review.findAll({
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  });

  // Get user average rating based on owner id
  app.get("/api/reviews/avgRating/:owner_id", function (req, res) {
    db.Review.findAll({
      attributes: ['owner_id', [db.Review.sequelize.fn('AVG', db.Review.sequelize.col('rating')), 'avgRating']],
      group: ['owner_id'],
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  });

  // Create a new review
  app.post("/api/reviews", function (req, res) {
    db.Review.create(req.body).then(function (dbReview) {
      res.json(dbReview);
    });
  });

  // update review
  app.put("/api/review/update", function (req, res) {
    console.log(req.body);
    db.Review.update(
      req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbReview) {
        res.json(dbReview);
      });
  });
};