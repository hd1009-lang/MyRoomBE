const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema({
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
});
const Icon = mongoose.model('Icon', iconSchema);

module.exports = Icon;
