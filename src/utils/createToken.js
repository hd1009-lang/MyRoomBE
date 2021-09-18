const jwt = require('jsonwebtoken');

const token = {
    createRefreshToken: (payload) =>
        jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: '7d' }),
    createAccessToken: (payload) =>
        jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '15m' }),
};

module.exports = token;
