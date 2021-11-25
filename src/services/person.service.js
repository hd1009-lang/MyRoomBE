const Person = require('../models/person.module');

const personService = {
    addPerson: async (info) => {
        try {
            const newPerson = new Person({
                ...info,
            });
            await newPerson.save();
            return newPerson;
        } catch (error) {
            throw new Error(error);
        }
    },
    updatePerson: async (info) => {
        const id = info.params.id;
        const body = info.body;
        try {
            const person = await Person.findById(id);
            if (!person) throw new Error('Không tồn tại');
            await Person.findByIdAndUpdate(id, body);
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getPerson: async () => {
        try {
            const result = await Person.findOne({})
                .populate('avatar', 'urlShow')
                .populate('urlCV', 'urlView urlDownload')
                .populate({
                    path: 'society',
                    populate: { path: 'img', select: 'urlShow' },
                })
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
};
module.exports = personService;
