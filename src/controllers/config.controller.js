const ConfigService = require('../services/config.service');

const configController = {
    getListConfig: async (req, res) => {
        try {
            const data = await ConfigService.getListConfig();
            return res.status(200).json({ msg: 'Ok', data });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};
module.exports = configController;
