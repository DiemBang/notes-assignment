var express = require('express');
var router = express.Router();
const connection = require("../lib/conn");

/* GET all users */
router.get('/', function(req, res) {

  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "SELECT * FROM users";

    connection.query(query, (err, data) => {
      if (err) console.log("err", err);

      console.log("users", data);
      res.json(data);
    });
  });
});

/* GET specific user */
router.get("/:id/", function(req, res) {

  let id = req.params.id;
  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "SELECT * FROM users WHERE id = ?"; 

    let value = [id];

    connection.query(query, value, (err,data) => {
      if (err) console.log("err", err);

      console.log("specific user", data);
      res.json(data[0]);
    });
  });
});

/* Create new user */
router.post("/", function(req, res) {

  let name = req.body.name; 
  let userName = req.body.username;
  let password = req.body.password;

  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "INSERT into users (name, username, password) VALUES (?, ?, ?)";
    let values = [name, userName, password];

    connection.query(query, values, (err, data) => {
      if (err) console.log("err", err);

      console.log("new user", data);
      res.json({message: "new user created"});
    });
  });
});

/* Login users POST */

module.exports = router;