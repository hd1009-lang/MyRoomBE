const Project = require('../models/project.module');

const projectService = {
    addProject: async (info) => {
        try {
            const newProject = new Project({
                ...info,
            });
            await newProject.save();
            return newProject;
        } catch (error) {
            throw new Error(error);
        }
    },
    getProject: async () => {
        try {
            const result = await Project.find().populate(
                'img cate techUse',
                'name urlShow'
            );
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProject: async (id, info) => {
        try {
            const result = await Project.findByIdAndUpdate(id, info);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
    getProjectWithCate: async (id) => {
        try {
            const result = await Project.find({ cate: id }).populate(
                'img cate techUse',
                'name urlShow'
            );
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
};
module.exports = projectService;
