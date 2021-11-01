const Service = require('../services/project.service');

const projectController = {
    addProject: async (req, res) => {
        try {
            const result = await Service.addProject(req.body);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getProject: async (req, res) => {
        try {
            const result = await Service.getProject();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateProject: async (req, res) => {
        const id = req.params.id;
        try {
            await Service.updateProject(id, req.body);
            return res.status(200).json({ msg: 'Cập nhật thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};
module.exports = projectController;
