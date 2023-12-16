const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/config");

class Course extends Model {}

Course.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skillLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    objectives: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    scope: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    benefits: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructorDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instructorName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instructorImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Course",
  }
);

module.exports = Course;
