const express = require("express");
const router = express.Router();
const { books } = require("../models");

router.get("/", async (req, res) => {
  const listOfBooks = await books.findAll();
  res.json(listOfBooks);
});

router.post("/", async (req, res) => {
  const book = req.body;
  await books.create(book);
  res.json(book);
});

module.exports = router;
