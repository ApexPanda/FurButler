/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
    const Message = sequelize.define("Message", {
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    has_chatted: DataTypes.BOOLEAN,
      createdAt: {
        field: "created",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "modified",
        type: DataTypes.DATE,
      }
    });
    return Message;
  };