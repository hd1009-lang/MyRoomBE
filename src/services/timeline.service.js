const Timeline = require('../models/timeline.module');

const timelineService = {
    addTimeline: async (info) => {
        try {
            const newTimeline = new Timeline({ ...info, show: false });
            await newTimeline.save();
            return newTimeline;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getTimeline: async () => {
        try {
            const result = await Timeline.find({ show: true }).limit(4);
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
            console.log(result);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getCV:()=>{
        try {
            const file = `${process.cwd()}/src/assets/CV_HoangDai_IternFE.pdf`;
            return file
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = timelineService;
