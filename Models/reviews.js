module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
      title: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      review: DataTypes.TEXT,
      author_id: DataTypes.INTEGER,
      owner_id: DataTypes.INTEGER,
      createdAt: {
        field: "created",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "modified",
        type: DataTypes.DATE,
      }
    });
    return Review;
  };
