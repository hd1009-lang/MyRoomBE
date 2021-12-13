const cateProjectService = require('../services/cateproject.service');

const cateProjectController = {
    addCate: async (req, res) => {
        try {
            await cateProjectService.addCate(req.body);
            return res.status(200).json({ result: 'Thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getCateProject: async (req, res) => {
        try {
            const result = await cateProjectService.getCate();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deleteCateProject: async (req, res) => {
        try {
            await cateProjectService.deleteCate(req.params.id);
            return res.status(200).json({ result: 'Thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = cateProjectController;
