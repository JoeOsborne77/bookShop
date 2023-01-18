module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return authors;
};
