const express = require("express");
const app = express();
const db = require("./models");
const bookRouter = require("./routes/books");
const cors = require("cors");
// const authorRouter = require("./routes/authors");

// app.use("/authors", authorRouter);
app.use(express.json());
app.use(cors());

app.use("/books", bookRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server running on port 3001:");
  });
});
