const Timeline = require('../models/timeline.module');
const Image = require('../models/image.module');

const timelineService = {
    addTimeline: async (info) => {
        try {
            const imageLogo = await Image.findById(info.logo);
            if (!imageLogo) throw new Error('Ảnh logo không tồn tại');
            const imageAvatar = await Image.findById(info.avatar);
            if (!imageAvatar) throw new Error('Ảnh avatar không tồn tại');
            const newTimeline = new Timeline({ ...info });
            await newTimeline.save();
            return newTimeline;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getTimeline: async () => {
        try {
            const result = await Timeline.find()
                .limit(4)
                .populate('logo avatar', 'urlShow');
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    updateTimeline: async (info) => {
        // eslint-disable-next-line no-underscore-dangle
        const id = info._id;
        const { _id, ...infoUpdate } = info;
        try {
            const result = await Timeline.findByIdAndUpdate(id, infoUpdate);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getCV: () => {
        try {
            const file = `${process.cwd()}/src/assets/CV_HoangDai_IternFE.pdf`;
            return file;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

module.exports = timelineService;
