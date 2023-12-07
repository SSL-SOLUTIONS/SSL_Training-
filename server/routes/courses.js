const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Course = require("../models/Course.js");

// Set up multer storage for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/courses")); // Fix the path to the uploads folder
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
router.post("/", upload.single("image"), async (req, res) => {
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
    } = req.body;
    const image = req.file ? req.file.filename : ""; // Get the uploaded file name

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
    });

    res.json(newCourse);
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
