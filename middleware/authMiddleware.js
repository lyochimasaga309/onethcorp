const jwt = require('jsonwebtoken');
const User = require('../models/user');

const protect = async (req, res, next) => {
    let token;

    // Check if the token is in the header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (remove 'Bearer' part)
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Add user data to request object
            req.user = await User.findById(decoded.id).select('-password');

            next(); // Continue to the next middleware or route handler
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, invalid token' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'No token, not authorized' });
    }
};

module.exports = protect;
