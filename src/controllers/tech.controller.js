const hanleUploadImg = require('../utils/uploadImg');
const Service = require('../services/tech.service');

const techController = {
    addTech: async (req, res) => {
        try {
            const resultLink = await hanleUploadImg.uploadImg(req.files.file);
            const info = { ...req.body, ...resultLink };
            const result = await Service.addTech(info);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = techController;
