"use strict";

const fs = require("fs");
const path = require("path");
var Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const dbSequelize = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
<<<<<<< HEAD
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
=======
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    dbSequelize[model.name] = model;
>>>>>>> 1570b1042f73e305d191f08f022f4e6b93099de9
  });

Object.keys(dbSequelize).forEach(function (modelName) {
  if (dbSequelize[modelName].associate) {
    dbSequelize[modelName].associate(dbSequelize);
  }
});

dbSequelize.sequelize = sequelize;
dbSequelize.Sequelize = Sequelize;

module.exports = dbSequelize;