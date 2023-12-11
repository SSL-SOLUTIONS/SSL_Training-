// middleware/authMiddleware.js
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Extract the token from the request headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    req.user = user;
    console.log("User authenticated:", user);
    next();
  });
};
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    console.log("User role:", req.user.role);
    if (!roles.includes(req.user.role)) {
      console.error("Forbidden: Insufficient role permissions");
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient role permissions" });
    }

    next();
  };
};

function extractUserFromToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    req.user = user;
    next();
  });
}

function generateTokens(user) {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
  const refreshToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
}
module.exports = {
  authenticateToken,
  authorizeRoles,
  extractUserFromToken,
  generateTokens,
};
