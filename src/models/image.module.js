const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    idFile: {
        type: String,
        required: true,
    },
    nameFile: {
        type: String,
        required: true,
    },
    urlShow: {
        type: String,
        required: true,
    },
    cate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CateImg',
    },
    status: {
        type: Boolean,
        default: false,
    },
});
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
