const hanleUploadImg = require('../utils/uploadImg');
const Service = require('../services/image.service');

const iconController = {
    addImage: async (req, res) => {
        try {
            const resultLink = await hanleUploadImg.uploadImg(req.files.file);
            const info = { ...req.body, ...resultLink };
            await Service.addImage(info);
            return res.status(200).json({ result: 'Thành công' });
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
    getAllImg: async (req, res) => {
        try {
            const result = await Service.getAllImage();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    addCateImage: async (req, res) => {
        try {
            await Service.addCateImg(req.body.name);
            return res.status(200).json({ result: 'Thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getCateImage: async (req, res) => {
        try {
            const result = await Service.getCateImg();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = iconController;
