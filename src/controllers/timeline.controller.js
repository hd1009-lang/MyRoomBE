const Service = require('../services/timeline.service');

const hanleUploadImg = require('../utils/uploadImg');

const TimelineController = {
    addTimeline: async (req, res) => {
        try {
            const images = await hanleUploadImg.uploadManyImg(req.files);
            const info = { avatar: images[0], logo: images[1], ...req.body };
            const result = await Service.addTimeline(info);
            return res
                .status(200)
                .json({ msg: 'Thêm thành công', info: result });
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
    },
    dowloadCV: async (req, res) => {
        try {
            const file = `${process.cwd()}/src/assets/CV_HoangDai_IternFE.pdf`;
            return res.download(file);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = TimelineController;
