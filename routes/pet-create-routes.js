// var connection = require("../config/connection.js");
var exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register pet route
exports.registerPet = function (req, res) {
  // should add date as current time 
  var today = new Date();
  // object for the pet 
  var pets = {
    "pet_name": DataTypes.STRING,
    "owner_id": DataTypes.INTEGAR,
    "pet_type": DataTypes.STRING,
    "image": DataTypes.VARBINARY,
    "about_me": DataTypes.STRING,
    "location": DataTypes.STRING,
    "created": today,
    "modified": today
  };
  // query to insert the new pet into the table 
  RTCPeerConnection.query("INSERT INTO pets SET ?", pets, function (error, results, fields) {
    // 400 if failed
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Pet registration error occured"
      });
      // 200 if successful
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "Pet registered successfully"
      });
    }
    console.log(fields);
  });
};