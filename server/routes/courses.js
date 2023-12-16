const { Op } = require("sequelize");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Course = require("../models/Course.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/courses"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Create a new course
router.post(
  "/",
  upload.fields([{ name: "image" }, { name: "instructorImage" }]),
  async (req, res) => {
    try {
      const {
        title,
        description,
        price,
        category,
        duration,
        skillLevel,
        objectives,
        scope,
        benefits,
        videoUrl,
        instructorName,
        instructorDescription,
      } = req.body;

      const image = req.files["image"] ? req.files["image"][0].filename : ""; // Get the uploaded image file name
      const instructorImage = req.files["instructorImage"]
        ? req.files["instructorImage"][0].filename
        : ""; // Get the uploaded instructorImage file name

      const newCourse = await Course.create({
        title,
        image,
        description,
        price,
        category,
        duration,
        skillLevel,
        objectives,
        scope,
        benefits,
        videoUrl,
        instructorName,
        instructorDescription,
        instructorImage,
      });

      res.json(newCourse);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);
// Get more courses (excluding the current course)
router.get("/more/:currentCourseId", async (req, res) => {
  try {
    const currentCourseId = req.params.currentCourseId;
    const courses = await Course.findAll({
      where: {
        id: {
          [Op.not]: currentCourseId, // Exclude the current course
        },
      },
    });

    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
