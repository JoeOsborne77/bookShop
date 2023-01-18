const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/", async (req, res) => {
  const listOfAuthors = await db.authors.findAll();
  res.json(listOfAuthors);
});

module.exports = router;
