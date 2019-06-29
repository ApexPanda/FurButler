/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all pets
  app.get("/api/pets", function (req, res) {
    db.Pet.findAll({}).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // Get pets based on owner id
  app.get("/api/pets/:owner_id", function (req, res) {
    db.Pet.findAll({
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // Create a new pet
  app.post("/api/pets", function (req, res) {
    db.Pet.create(req.body).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // update pet
  app.put("/api/pet/update", function (req, res) {
    console.log(req.body);
    db.Pet.update(
      req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbPet) {
        res.json(dbPet);
      });
  });
};