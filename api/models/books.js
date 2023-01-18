module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
    },
    published: {
      type: DataTypes.DATEONLY,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "authors",
        key: "id",
      },
    },
  });

  books.belongsTo(sequelize.models.authors, {
    foreignKey: "authorId",
    as: "authors",
  });
  sequelize.sync();
  return books;
};
