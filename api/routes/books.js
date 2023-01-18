const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/", async (req, res) => {
  const listOfBooks = await db.books.findAll();
  res.json(listOfBooks);
});

router.get("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  const individualBook = await db.books.findByPk(bookId, {
    include: [
      {
        model: db.authors,
        as: "authors",
      },
    ],
  });
  res.json(individualBook);
});

router.post("/", async (req, res) => {
  const book = req.body;
  await db.books.create(book);
  res.json(book);
});

router.delete("/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  await db.books.destroy({
    where: {
      id: bookId,
    },
  });
});

router.put("/title", async (req, res) => {
  const bookObject = req.body;
  await db.books.update(
    { title: bookObject.title },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.title);
});

router.put("/authorID", async (req, res) => {
  const bookObject = req.body;
  await db.books.update(
    { author_id: bookObject.author_id },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.author_id);
});

router.put("/published", async (req, res) => {
  const bookObject = req.body;
  await db.books.update(
    { published: bookObject.published },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.published);
});

router.put("/tags", async (req, res) => {
  const bookObject = req.body;
  await db.books.update(
    { tags: bookObject.tags },
    { where: { id: bookObject.id } }
  );
  res.json(bookObject.tags);
});

module.exports = router;
