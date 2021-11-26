const Service = require('../services/timeline.service');

// const hanleUploadImg = require('../utils/uploadImg');

const TimelineController = {
    addTimeline: async (req, res) => {
        try {
            // const images = await hanleUploadImg.uploadManyImg(req.files);
            // const info = { avatar: images[0], logo: images[1], ...req.body };
            await Service.addTimeline(req.body);
            return res.status(200).json({ result: 'Thành công' });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    getTimeline: async (req, res) => {
        try {
            const result = await Service.getTimeline();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    getTimeLineAdmin: async (req, res) => {
        try {
            const result = await Service.getTimeLineAdmin();
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    updateTimeline: async (req, res) => {
        try {
            await Service.updateTimeline({ ...req.body });
            return res.status(200).json({ result: 'Cập nhật thành công' });
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
