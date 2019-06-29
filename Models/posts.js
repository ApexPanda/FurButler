
module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      title: DataTypes.STRING,
      post: DataTypes.TEXT,
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
    return Post;
  };