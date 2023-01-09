module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define("authors", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return authors;
};
