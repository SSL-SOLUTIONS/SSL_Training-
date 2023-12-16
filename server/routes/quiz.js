// server/routes/quiz.js
const express = require("express");
const Quiz = require("../models/Quiz.js");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// Get all quiz questions
router.get("/questions", async (req, res) => {
  try {
    const questions = await Quiz.findAll();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add a new quiz question
router.post("/add", async (req, res) => {
  try {
    const { questionText, option1, option2, option3, option4, correctOption } =
      req.body;

    console.log("Before creating quiz question");
    const newQuestion = await Quiz.create({
      questionText,
      option1,
      option2,
      option3,
      option4,
      correctOption,
    });
    console.log("After creating quiz question");

    res.status(201).json({
      message: "Quiz question added successfully",
      question: newQuestion,
    });
  } catch (error) {
    console.error("Error adding quiz data:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

// Submit answers
router.post(
  "/submit-answers",
  [
    body("answers").isArray().withMessage("Answers should be an array"),
    body("answers.*.questionId")
      .notEmpty()
      .withMessage("Question ID is required"),
    body("answers.*.selectedOption")
      .notEmpty()
      .withMessage("Selected option is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { answers } = req.body;

      // Calculate the score
      const score = calculateScore(answers);

      res.status(200).json({ score });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Helper function to calculate the score
const calculateScore = (userAnswers) => {
  let score = 0;

  // Iterate through user's answers and check correctness
  userAnswers.forEach((userAnswer) => {
    // Retrieve the correct answer from the database
    const { correctOption } = Quiz.findByPk(userAnswer.questionId);

    // Check if the user's answer is correct
    if (userAnswer.selectedOption === correctOption) {
      score += 1;
    }
  });

  return score;
};

module.exports = router;
