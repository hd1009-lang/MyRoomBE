const cateProjectService = require('../services/cateproject.service');

const cateProjectController = {
    addCate: async (req, res) => {
        try {
            const result = await cateProjectService.addCate(req.body);
            return res.status(200).json({ info: result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = cateProjectController;
