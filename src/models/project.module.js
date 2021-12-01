const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CateProject',
    },
    img: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
    },
    description: {
        type: String,
        required: true,
    },
    techUse: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
        },
    ],
    demo: {
        type: String,
    },
    time: {
        type: String,
        required: true,
    },
    show: {
        type: Boolean,
        default: true,
        required: true,
    },
});
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
