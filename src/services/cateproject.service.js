const CateProject = require('../models/category-project.module');

const cateProjectService = {
    addCate: async (info) => {
        try {
            const cate = await CateProject.findOne({ name: info.name });
            if (cate) {
                throw new Error('Đã tồn tại');
            }
            const newCate = new CateProject({ name: info.name });
            await newCate.save();
            return newCate;
        } catch (error) {
            throw new Error(error);
        }
    },
    getCate: async () => {
        try {
            const result = await CateProject.find();
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteCate: async (id) => {
        try {
            await CateProject.findByIdAndRemove(id);
            return;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = cateProjectService;
