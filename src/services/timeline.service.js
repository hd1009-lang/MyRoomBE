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
};

module.exports = timelineService;
