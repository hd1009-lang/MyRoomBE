const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
    {
        idFile: {
            type: String,
            required: true,
        },
        nameFile: {
            type: String,
            required: true,
        },

        urlView: {
            type: String,
            required: true,
        },
        urlDownload: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const File = mongoose.model('File', fileSchema);

module.exports = File;
