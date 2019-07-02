/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    const Pet = sequelize.define("Pet", {
      pet_name: DataTypes.STRING,
      owner_id: DataTypes.INTEGER,
      pet_type: DataTypes.STRING,
      image: DataTypes.STRING,
      about_me: DataTypes.TEXT,
      location: DataTypes.STRING,
      createdAt: {
        field: "created",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "modified",
        type: DataTypes.DATE,
      }
    });
    return Pet;
  };