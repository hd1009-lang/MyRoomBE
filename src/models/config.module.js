const mongoose = require('mongoose');

const configSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Config = mongoose.model('Config', configSchema);
module.exports = Config;
