const express = require("express");
const router = express.Router();
const { books } = require("../models");

router.get("/", async (req, res) => {
  const listOfBooks = await books.findAll();
  res.json(listOfBooks);
});

router.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const individualBook = await books.findByPk(bookId);
  console.log("individualBook:", individualBook);
  res.json(individualBook);
});

router.post("/", async (req, res) => {
  const book = req.body;
  await books.create(book);
  res.json(book);
});

router.delete("/:bookId", async (req, res) => {
  console.log(req.params.bookId);
  const bookId = req.params.bookId;
  await books.destroy({
    where: {
      id: bookId,
    },
  });
});

module.exports = router;
