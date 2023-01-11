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
      allowNull: true,
    },
    published: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
