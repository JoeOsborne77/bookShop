const express = require("express");
const app = express();
app.use(express.json());
const db = require("./models");
// const authorRouter = require("./routes/authors");
const bookRouter = require("./routes/books");

// app.use("/authors", authorRouter);
app.use("/books", bookRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001:");
  });
});
