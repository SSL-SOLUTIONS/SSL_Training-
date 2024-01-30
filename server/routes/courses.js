// routes/courses.js
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
        aboutCourse,
        price,
        category,
        duration,
        skillLevel,
        videoUrl,
        instructorName,
        instructorDescription,
      } = req.body;

       const existingCourse = await Course.findOne({
         where: {
           title,
         },
       });

  if (existingCourse) {
    // Handle duplicate course entry
     return res.status(409).json({ error: "Course already exists" });
  }

      const image =
        req.files && req.files["image"] ? req.files["image"][0].filename : "";
      const instructorImage =
        req.files && req.files["instructorImage"]
          ? req.files["instructorImage"][0].filename
          : "";

      const newCourse = await Course.create({
        title,
        image,
        description,
        price,
        category,
        duration,
        skillLevel,
        aboutCourse,
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
          [Op.not]: currentCourseId,
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
