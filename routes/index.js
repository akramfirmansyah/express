var express = require("express");
var router = express.Router();
var db = require("../database");

// GET
router.get("/", (req, res) => {
  res.render('index', {title: "Express"})
});

module.exports = router;
