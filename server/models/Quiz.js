// server/models/Quiz.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

class Quiz extends Model {}

Quiz.init(
  {
    questionText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    correctOption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Quiz",
  }
);

module.exports = Quiz;
