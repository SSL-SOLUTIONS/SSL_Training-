const express = require("express");
const router = express.Router();
const {
  authenticateToken,
  authorizeRoles,
  extractUserFromToken,
} = require("../middleware/middlewareAuth");

// Middleware to check for a valid session and user role
const checkSessionAndRole = (req, res, next) => {
  // Check for a valid token
  authenticateToken(req, res, (err) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    // Check for the user role (you might have to modify this based on your user model structure)
    const userRole = req.user.role;
    if (userRole !== "user") {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient role permissions" });
    }

    next();
  });
};

// Protected route example
router.get(
  "/profile",
  checkSessionAndRole,
  authenticateToken,
  extractUserFromToken,
  authorizeRoles(["user"]),
  (req, res) => {
    res
      .status(200)
      .json({ message: "Access to protected route granted", user: req.user });
  }
);

// Admin route example
router.get(
  "/admin",
  authenticateToken,
  extractUserFromToken,
  authorizeRoles(["admin"]),
  (req, res) => {
    res.status(200).json({ message: "Admin access granted" });
  }
);

module.exports = router;
