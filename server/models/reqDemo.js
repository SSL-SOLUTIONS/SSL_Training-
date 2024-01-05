const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

class RequestDemo extends Model {}

RequestDemo.init(
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companySize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RequestDemo",
  }
);

module.exports = RequestDemo;
