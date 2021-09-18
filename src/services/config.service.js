const Config = require('../models/config.module');

const configService = {
    getListConfig: async () => {
        try {
            const listConfig = await Config.find({});
            return listConfig;
        } catch (error) {
            return new Error(error.message);
        }
    },
};

module.exports = configService;
