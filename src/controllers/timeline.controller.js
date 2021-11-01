const Service = require('../services/timeline.service');

const hanleUploadImg = require('../utils/uploadImg');

const TimelineController = {
    addTimeline: async (req, res) => {
        try {
            // const images = await hanleUploadImg.uploadManyImg(req.files);
            const images = await hanleUploadImg.uploadImg(req.files.avatar);
            // const info = { avatar: images[0], logo: images[1], ...req.body };
            // const result = await Service.addTimeline(info);
            return res
                .status(200)
                .json({ msg: 'Thêm thành công', info: images });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    getTimeline: async (req, res) => {
        try {
            const result = await Service.getTimeline();
            console.log(result);
            return res.status(200).json({ list: result });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    updateTimeline: async (req, res) => {
        try {
            const result = await Service.updateTimeline({ ...req.body });
            return res
                .status(200)
                .json({ msg: 'Cập nhật thành công', newInfo: result });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    downloadCV: async (req, res) => {
        try {
            const result = Service.getCV();
            return res.download(result);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = TimelineController;
