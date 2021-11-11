const mongoose = require('mongoose');

const cateImgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const CateImg = mongoose.model('CateImg', cateImgSchema);
module.exports = CateImg;
