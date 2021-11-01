const mongoose = require('mongoose');

const cateProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const cateProject = mongoose.model('CateProject', cateProjectSchema);

module.exports = cateProject;
