// var connection = require("../config/connection.js");
var exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register review route
exports.registerReview = function (req, res) {
  // should add date as current time 
  var today = new Date();
  // object for the review 
  var reviews = {
    "title": DataTypes.STRING,
    "rating": DataTypes.INTEGAR,
    "review": DataTypes.STRING,
    "pet_id": DataTypes.INTEGAR,
    "owner_id": DataTypes.INTEGAR,
    "created": today,
    "modified": today
  };
  // query to insert the new review into the table 
  RTCPeerConnection.query("INSERT INTO reviews SET ?", reviews, function (error, results, fields) {
    // 400 if failed
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Review error occured"
      });
      // 200 if successful
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "Review added successfully"
      });
    }
    console.log(fields);
  });
};