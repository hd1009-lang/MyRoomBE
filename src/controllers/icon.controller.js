const hanleUploadImg = require('../utils/uploadImg');
const Service = require('../services/icon.service');

const iconController = {
    addIcon: async (req, res) => {
        try {
            const resultLink = await hanleUploadImg.uploadImg(req.files.file);
            const info = { ...req.body, ...resultLink };
            const result = await Service.addIcon(info);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = iconController;
