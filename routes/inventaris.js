var express = require("express");
var router = express.Router();
var db = require("../database");

// GET
router.get("/", (req, res) => {
  db.query("SELECT * from inventaris", (err, rows, field) => {
    if (err) throw err;
    res.render("inventaris", { title: "Daftar Inventaris", datas: rows });
  });
});

// GET data by Query
router.get("/:params", (req, res) => {
  let params = req.params;

  db.query(
    `SELECT * FROM inventaris WHERE code = ?`,
    [params.params],
    (err, rows, field) => {
      if (err) throw err;
      res.render("inventaris", { title: "Daftar Inventaris", datas: rows });
    }
  );
});

// POST
router.post("/", (req, res) => {
  let body = req.body;

  db.query(`INSERT INTO inventaris SET ?`, body, (err, rows, field) => {
    if (err) throw err;
    res.json(rows);
  });
});

// Update
router.put("/:nim", (req, res) => {
  let body = req.body;
  let params = req.params;

  db.query(
    `UPDATE inventaris SET name=${body.name}, nim=${body.nim}, angkatan=${body.angkatan} WHERE nim=${params.nim}`,
    (err, rows, field) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

// Delete
router.delete("/:nim", (req, res) => {
  db.query(
    `DELETE FROM inventaris WHERE nim='${req.params.nim.toUpperCase()}'`,
    (err, rows, field) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

module.exports = router;
