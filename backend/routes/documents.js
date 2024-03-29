var express = require("express");
const connection = require("../lib/conn");
var router = express.Router();

/* GET all docs */
router.get("/", function (req, res) {
  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "SELECT * FROM documents";

    connection.query(query, (err, data) => {
      if (err) console.log("err", err);
      console.log("documents", data);
      res.json(data);
    });
  });
});

/* GET docs for specific user */
router.post("/user/", function (req, res) {
  let userId = req.body.user;
  
  console.log("Getting specific documents for user", userId);

  
  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "SELECT * FROM documents WHERE user = ?"; 

    let value = [userId];

    connection.query(query, value, (err,data) => {
      if (err) console.log("err", err);

      console.log("docs for specific user", data);
      res.json(data);
    });
  });
}); 

/* GET specific doc */
router.get("/:id", function (req, res) {

  let id = req.params.id;

  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "SELECT * FROM documents WHERE id = ?";
    let values = [id];

    connection.query(query, values, (err, data) => {
      if (err) console.log("err", err);

      console.log("GET specific document", data);
      // return first item/object in the list, since we know the query
      // should only return one result and we do not want to return
      // a list
      res.json(data[0]);
    });
  });
});

/* CREATE new doc */
router.post("/new", (req, res) => {

    let user = req.body.user;
    let name = req.body.name;
    let content = req.body.content;

    connection.connect((err) => {
      if (err) console.log("err", err);

      let query = "INSERT into documents (user, name, content) VALUES (?, ?, ?)";
      let values = [user, name, content];

      connection.query(query, values, (err, data) => {
        if (err) console.log("err", err);

        console.log("new document", data);
        res.json({message: "new doc created"});
      });
    });
});

/* EDIT doc */
router.patch("/:id", (req, res) => {

  let id = req.params.id;
  let user = req.body.user;
  let name = req.body.name;
  let content = req.body.content;

  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "UPDATE documents SET user = ?, name = ?, content = ? WHERE id = ?";
    let values = [user, name, content, id];
    
    connection.query(query, values, (err, data) => {
      if (err) console.log("err", err);

      console.log("edit document", data);
      res.json({message: "doc edited"});
    });
  });
});

/* DELETE doc */

router.delete("/:id", (req, res) => {

  let id = req.params.id;

  connection.connect((err) => {
    if (err) console.log("err", err);

    let query = "DELETE FROM documents WHERE id = ?";
    let values = [id];

    connection.query(query, values, (err, data) => {
      if (err) console.log("err", err);

      console.log("delete document", data);
      res.json( {message: "doc deleted"}); 
    });
  });
});

module.exports = router;
