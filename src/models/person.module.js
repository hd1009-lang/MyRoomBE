const mongoose = require('mongoose');

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
        },
        urlCV:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'File',
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
                    ref: 'Image',
                },
            },
        ],
    },
    { timestamps: true }
);
const Person = mongoose.model('Person', personSchema);
module.exports = Person;
