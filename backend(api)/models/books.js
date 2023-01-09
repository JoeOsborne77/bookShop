const authors = require("./authors");

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  // books.associate = (models) => {
  //   books.belongsTo(models.authors, {
  //     foreignKey: "author_id",
  //     as: "author",
  //   });
  // };

  return books;
};
