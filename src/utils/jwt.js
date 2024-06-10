const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (user) => {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
    createToken,
    decodeToken
};
