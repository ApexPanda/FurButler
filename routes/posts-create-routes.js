// var connection = require("../config/connection.js");
var exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register post route
exports.registerPost = function (req, res) {
  // should add date as current time 
  var today = new Date();
  // object for the post 
  var posts = {
    "title": DataTypes.STRING,
    "rating": DataTypes.INTEGAR,
    "post": DataTypes.STRING,
    "author_id": DataTypes.INTEGAR,
    "owner_id": DataTypes.INTEGAR,
    "created": today,
    "modified": today
  };
  // query to insert the new post into the table 
  RTCPeerConnection.query("INSERT INTO posts SET ?", posts, function (error, results, fields) {
    // 400 if failed
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Post error occured"
      });
      // 200 if successful
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "Post added successfully"
      });
    }
    console.log(fields);
  });
};