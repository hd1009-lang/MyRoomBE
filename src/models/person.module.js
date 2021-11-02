const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        society: [
            {
                url: {
                    type: String,
                    required: true,
                },
                img: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Icon',
                },
            },
        ],
    },
    { timestamps: true }
);
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
