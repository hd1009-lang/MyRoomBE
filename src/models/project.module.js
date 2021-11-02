const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CateProject',
        },
        description: {
            type: String,
            required: true,
        },
        techUse: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Icon',
            },
        ],
        demo: {
            type: String,
        },
        show: {
            type: Boolean,
            default: true,
            required: true,
        },
    },
    { timestamps: true }
);
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
