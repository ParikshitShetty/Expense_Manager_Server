// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const env = require('dotenv').config()
console.log(`Secret Key is ${env.parsed.Secret_Key}`);

function verifyToken(req, res, next) {
    try {
        const token = req.header('Authorization');
        console.log("token",token);
        if (!token) return res.status(401).json({ error: 'Access denied' });

        const decoded = jwt.verify(token, env.parsed.Secret_Key);
        console.log("decoded",decoded)
        req.user_name = decoded.user_name;
        next();
    } catch (error) {
        console.error("error",error.message)
        if (error.message.includes('expired')) {
            res.status(401).json({ error: 'Token expired' });
            return
        }
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;