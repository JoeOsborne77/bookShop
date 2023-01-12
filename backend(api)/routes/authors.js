const express = require("express");
const router = express.Router();
const { authors } = require("../models");

router.get("/", async (req, res) => {
  console.log("res, req:", res, req);
  const listOfAuthors = await authors.findAll();
  res.json(listOfAuthors);
});

// router.get("/:authorId", async (req, res) => {
//   const authorId = req.params.id;
//   const individualAuthor = await authors.findByPk(authorId);
//   res.json(individualAuthor);
// });

// router.post("/author", async (req, res) => {
//   const author = req.body;
//   await authors.create(author);
//   res.json(author);
// });

// router.delete("/:authorId", async (req, res) => {
//   const authorId = req.params.id;
//   await authors.destroy({
//     where: {
//       id: authorId,
//     },
//   });
// });

// router.put("/title", async (req, res) => {
//   const bookObject = req.body;
//   await books.update(
//     { title: bookObject.title },
//     { where: { id: bookObject.id } }
//   );
//   res.json(bookObject.title);
// });

// router.put("/authorID", async (req, res) => {
//   const bookObject = req.body;
//   await books.update(
//     { author_id: bookObject.author_id },
//     { where: { id: bookObject.id } }
//   );
//   res.json(bookObject.author_id);
// });

// router.put("/published", async (req, res) => {
//   const bookObject = req.body;
//   await books.update(
//     { published: bookObject.published },
//     { where: { id: bookObject.id } }
//   );
//   res.json(bookObject.published);
// });

// router.put("/tags", async (req, res) => {
//   const bookObject = req.body;
//   await books.update(
//     { tags: bookObject.tags },
//     { where: { id: bookObject.id } }
//   );
//   res.json(bookObject.tags);
// });

module.exports = router;
