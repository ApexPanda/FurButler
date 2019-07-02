module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    service_provider: DataTypes.BOOLEAN,
    pet_owner: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
  return User;
};


// User.associate = function(models) {
// Associating Users with Pets
// When an User is deleted, also delete any associated Pets
//   User.hasMany(models.Pet, {
//     onDelete: "cascade"
//   });
// };