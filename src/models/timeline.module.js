const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema(
    {
        avatar: {
            id: { type: String, required: true },
            url: { type: String, required: true },
        },
        logo: {
            id: { type: String, required: true },
            url: { type: String, required: true },
        },
        timeExp: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
            required: true,
            maxlength: 150,
        },
        show: {
            type: Boolean,
            default:false,
            required: true,
        },
    },
    { timestamps: true }
);

const TimeLine = mongoose.model('Timeline', timelineSchema);

module.exports = TimeLine;
