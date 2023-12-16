const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  // Extract the token from the request headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  const verifyToken = promisify(jwt.verify);

  try {
    const user = await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    console.log("User authenticated:", user);
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Forbidden: Token expired" });
    }
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
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

const extractUserFromToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  const verifyToken = promisify(jwt.verify);

  try {
    const user = await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

function generateTokens(user) {
  const accessToken = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "24h" }
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
