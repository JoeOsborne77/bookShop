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

router.put("/title", async (req, res) => {
  const bookObject = req.body;
  await books.update(
    { title: bookObject.title },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.title);
});

router.put("/authorID", async (req, res) => {
  const bookObject = req.body;
  await books.update(
    { author_id: bookObject.author_id },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.author_id);
});

router.put("/published", async (req, res) => {
  const bookObject = req.body;
  await books.update(
    { published: bookObject.published },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.published);
});

router.put("/tags", async (req, res) => {
  const bookObject = req.body;
  await books.update(
    { tags: bookObject.tags },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.tags);
});

module.exports = router;
