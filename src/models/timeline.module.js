const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema(
    {
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
        },
        logo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
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
            default: false,
            required: true,
        },
    },
    { timestamps: true }
);

const TimeLine = mongoose.model('Timeline', timelineSchema);

module.exports = TimeLine;
