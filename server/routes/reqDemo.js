// server/routes/quiz.js
const express = require("express");
const RequestDemo = require("../models/reqDemo");
const router = express.Router();

router.post("/upload", async (req, res) => {
  try {
    const {Name, email, companyName, companySize } =
      req.body;

    const newDemo = await RequestDemo.create({
      Name,
      email,
      companyName,
      companySize,
    });

    res.status(201).json({
      message: "Demo Request sent successfully",
      question: newDemo,
    });
  } catch (error) {
    console.error("Error adding demo request:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});


module.exports = router;
