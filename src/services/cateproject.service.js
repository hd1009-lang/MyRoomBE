const CateProject = require('../models/category-project.module');

const cateProjectService = {
    addCate: async (info) => {
        try {
            const newCate = new CateProject({ name: info.name });
            await newCate.save();
            return newCate;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = cateProjectService;
