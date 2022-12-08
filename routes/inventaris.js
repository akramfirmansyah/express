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
router.put("/:params", (req, res) => {
  let params = req.params;
  let body = req.body;

  db.query(
    `UPDATE inventaris SET code='${body.code}', name='${body.name}', bahanmerek='${body.bahanmerek}', jumlah=${body.jumlah}, gambar='${body.gambar}', decs='${body.decs}' WHERE code='${params.params}'`,
    (err, rows, field) => {
      if (err) throw err;
      res.json([params, body]);
    }
  );
});

// Delete
router.delete("/", (req, res) => {
  db.query(
    `DELETE FROM inventaris WHERE code='${req.body.code}'`,
    (err, rows, field) => {
      if (err) throw err;
      res.json(req.body.code);
    }
  );
});

module.exports = router;
