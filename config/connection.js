const mysql = require("mysql");

// eslint-disable-next-line no-unused-vars
const connection;

if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Password",
    database: "g57v06z3jkgspbrm"
  });
}