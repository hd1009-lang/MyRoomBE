const Service = require('../services/person.service');

const personController = {
    addPerson: async (req, res) => {
        try {
            const result = await Service.addPerson(req.body);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updatePerson: async (req, res) => {
        try {
            await Service.updatePerson(req);
            return res.status(200).json({ msg: 'Cập nhật thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getPerson: async (req, res) => {
        try {
            const result = await Service.getPerson();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    addSociety: async (req, res) => {
        const id = req.params.id;
        try {
            await Service.addSociety(id, req.body);
            return res.status(200).json({ result: 'Thêm thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateSociety: async (req, res) => {
        const id = req.params.id;
        try {
            await Service.updateSociety(id, req.body);
            return res.status(200).json({ result: 'Cập nhật thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deleteSociety: async (req, res) => {
        const id = req.params.id;
        try {
            await Service.deleteSociety(id, req.body);
            return res.status(200).json({ result: 'Xoá thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = personController;
