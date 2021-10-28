const jwt = require('jsonwebtoken');

const key = {
    createAcceptKey: (payload) =>
        jwt.sign(payload, process.env.ACCEPT_KEY),
};

module.exports = key;
