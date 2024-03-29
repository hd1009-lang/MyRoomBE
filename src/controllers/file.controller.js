const Service = require('../services/file.service');
const driveAPI = require('../utils/GoogleDrive');

const fileController = {
    uploadFile: async (req, res) => {
        try {
            const resultLink = await driveAPI.upload(req.files.file);
            const info = { ...req.body, ...resultLink };
            const result = await Service.uploadFile(info);
            return res.status(200).json({ result });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: error.message });
        }
    },
    updateFile: async (req, res) => {
        console.log(req.body);
        try {
            await driveAPI.updateFile(req.body.idFile, req.files.file);
            return res.status(200).json({ result: 'Thành công' });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = fileController;
