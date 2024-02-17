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



module.exports = router;
