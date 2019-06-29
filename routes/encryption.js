var bcrypt = require("bcrypt");

// Hash password
exports.cryptPassword = function(password, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    // eslint-disable-next-line curly
    if (err) 
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });
  });
};

exports.comparePassword = function(plainPass, hashword, callback) {
  bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
    return err === null ?
      callback(null, isPasswordMatch) :
      callback(err);
  });
};