const key = require('../utils/createKey');

const keyService = {
    generateAcceptKey: (password) => {
        try {
            const acceptToken = key.createAcceptKey({password});
            return acceptToken;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = keyService;
