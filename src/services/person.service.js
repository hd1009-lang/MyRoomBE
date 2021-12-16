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
                .populate('urlCV', 'idFile urlView urlDownload')
                .populate({
                    path: 'society',
                    populate: { path: 'img', select: 'urlShow' },
                });
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    addSociety: async (id, info) => {
        console.log({ id, info });
        try {
            await Person.findByIdAndUpdate(
                { _id: id },
                { $push: { society: info } }
            );
            return;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateSociety: async (id, info) => {
        console.log({ id, info });
        try {
            await Person.findByIdAndUpdate(
                { _id: id },
                {
                    $set: { 'society.$[elementX].url': info.url },
                    'society.$[elementX].img': info.img,
                },
                {
                    arrayFilters: [
                        {
                            'elementX._id': info.id,
                        },
                    ],
                }
            );
            return;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteSociety: async (id, data) => {
        console.log({ id, data: data.info });
        try {
            const result = await Person.findByIdAndUpdate(
                { _id: id },
                { $pull: { society: { _id: data.info } } }
            );
            console.log(result);
            return;
        } catch (error) {
            throw new Error(error);
        }
    },
};
module.exports = personService;
