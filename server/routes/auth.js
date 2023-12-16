  const express = require("express");
  const router = express.Router();
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  const { body, validationResult } = require("express-validator");
  const User = require("../models/User");
  const multer = require("multer");
  const {
    authenticateToken,
    authorizeRoles,
    generateTokens,
  } = require("../middleware/middlewareAuth");

  require("dotenv").config();

  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  router.post(
    "/signup",
    upload.single("filename"),
    [
      body("Name").notEmpty().withMessage("Name is required"),
      body("city").notEmpty().withMessage("City is required"),
      body("experience").isInt().withMessage("Experience should be a number"),
      body("phone").isInt().withMessage("Phone should be a number"),
      body("email").isEmail().withMessage("Invalid email"),
      body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
      body("confirmPassword")
        .custom((value, { req }) => value === req.body.password)
        .withMessage("Passwords do not match"),
    ],
    async (req, res) => {
      console.log(req.body);
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const { Name, city, experience, phone, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res
            .status(400)
            .json({ message: "Email is already registered", field: "email" });
        }

        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);
        // Convert the file buffer to base64
        const fileBuffer = req.file.buffer;
        const fileBase64 = fileBuffer.toString("base64");

        const newUser = await User.create({
          Name,
          city,
          experience,
          phone,
          email,
          password: hashedPassword,
          confirmPassword: hashedPassword, // Store the hashed password in confirmPassword field as well
          filename: fileBase64,
        });

        // Generate a JWT token for the user
        const { accessToken, refreshToken } = generateTokens(newUser);
        res.status(201).json({ user: newUser, token: accessToken, refreshToken });
      } catch (error) {
        console.error("Error generating token:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  );

  router.post(
    "/login",
    [
      body("email").isEmail().withMessage("Email required"),
      body("password").notEmpty().withMessage("Password is required"),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return res
            .status(401)
            .json({ message: "User not found with this Email or invalid email" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          const { accessToken, refreshToken } = generateTokens(user);

          // Set the F in a cookie with an expiry time (24 hours for both access and refresh tokens)
          res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          });

          // Send the refresh token in the response body
          res.status(200).json({ user, accessToken, refreshToken });
        } else {
          res.status(401).json({ message: "Invalid Email or Password" });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  );

  router.post("/refresh-token", (req, res) => {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Refresh token not provided" });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Forbidden: Invalid refresh token" });
      }

      const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

      // Set the new access token as a cookie with an expiry time
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      // Send the new refresh token in the response body
      res.status(200).json({ accessToken, refreshToken: newRefreshToken });
    });
  });

  router.get("/profile", authenticateToken, async (req, res) => {
    try {
      // Assuming User model has the necessary fields
      const user = await User.findByPk(req.user.id, {
        attributes: [
          "Name",
          "city",
          "experience",
          "phone",
          "email",
          "about",
          "profilePicture",
          "role",
        ],
      });

      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.post(
    "/update-profile",
    authenticateToken,
    upload.single("profilePicture"),
    async (req, res) => {
      try {
        const { Name, city, experience, phone, email, about } = req.body;

        // Check if a new profile picture is uploaded
        const profilePicture = req.file
          ? req.file.buffer.toString("base64")
          : null;

        // Find the user by ID
        const user = await User.findByPk(req.user.id);

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Update user data
        user.Name = Name || user.Name; // Provide a default value if not provided in the request
        user.city = city || user.city;
        user.experience = experience || user.experience;
        user.phone = phone || user.phone;
        user.email = email || user.email;
        user.about = about || user.about;

        // Update profile picture if provided
        if (profilePicture) {
          user.profilePicture = profilePicture;
        }

        // Save the updated user
        await user.save();

        console.log("Profile updated successfully");

        res.status(200).json({ message: "Profile updated successfully" });
      } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  );

  // Admin route example
  router.get(
    "/admin",
    authenticateToken,
    authorizeRoles(["admin"]),
    (req, res) => {
      res.status(200).json({ message: "Admin access granted" });
    }
  );

  module.exports = router;
