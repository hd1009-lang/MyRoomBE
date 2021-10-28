const File = require('../models/file.module');

const fileService = {
    uploadFile: async (info) => {
        try {
            const newFile = new File({
                idFile: info.id,
                nameFile: info.name,
                urlView: info.webViewLink,
                urlDownload: info.webContentLink,
            });
            await newFile.save();
            return newFile;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = fileService;
