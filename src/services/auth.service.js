const Config = require('../models/config.module');

const authService = {
    login: async (password) => {
        try {
            const config = await Config.find({});
            if (config[0].password !== password)
                throw new Error('Mật khẩu không đúng');
            return config[0];
        } catch (error) {
            throw new Error(error.message);
        }
    },
};
module.exports = authService;
