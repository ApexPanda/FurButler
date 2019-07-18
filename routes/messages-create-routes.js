// var connection = require("../config/connection.js");
const exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register message route
exports.registerMessage = function (req, res) {
  // should add date as current time 
  const today = new Date();
  // object for the message 
  const messages = {
    "sender_id": DataTypes.STRING,
    "receiver_id": DataTypes.INTEGAR,
    "has_chatted": DataTypes.BOOLEAN,
    "created": today,
    "modified": today
  };
  // query to insert the has messaged into the table 
  RTCPeerConnection.query("INSERT INTO messages SET ?", messages, function (error, results, fields) {
    // 400 if failed
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Message registration error occured"
      });
      // 200 if successful
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "Message registered successfully"
      });
    }
    console.log(fields);
  });
};