const Tech = require('../models/tech.module');

const techService = {
    addTech: async (info) => {
        try {
            const newTech = new Tech({
                idFile: info.id,
                nameFile: info.name,
                urlShow: info.url,
            });
            await newTech.save();
            return newTech;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = techService;
