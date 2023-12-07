// middleware/authMiddleware.js
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

async function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    // Verify the token asynchronously
    const verifyTokenAsync = promisify(jwt.verify);

    try {
        const decoded = await verifyTokenAsync(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
}

function authorizeRoles(roles) {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
    };
}

function extractUserFromToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        req.user = user;
        next();
    });
}

module.exports = { authenticateToken, authorizeRoles, extractUserFromToken };
