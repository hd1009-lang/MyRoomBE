const hanleUploadImg = require('../utils/uploadImg');
const Service = require('../services/image.service');

const iconController = {
    addImage: async (req, res) => {
        try {
            const resultLink = await hanleUploadImg.uploadImg(req.files.file);
            const info = { ...req.body, ...resultLink };
            const result = await Service.addImage(info);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    addCateImage: async (req, res) => {
        try {
            const result = await Service.addCateImg(req.body.name);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getImage: async (req, res) => {
        try {
            const query = req.params.cate;
            const result = await Service.getImage(query);
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = iconController;
