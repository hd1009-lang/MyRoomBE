const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
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
const Tech = mongoose.model('Tech',techSchema)

module.exports = Tech