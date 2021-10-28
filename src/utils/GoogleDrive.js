require('dotenv').config();

const { google } = require('googleapis');
const fs = require('fs');

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

const driveAPI = {
    upload: async (file, parents) => {
        try {
            const { data } = await drive.files.create({
                requestBody: {
                    name: file.name,
                    mimeType: file.mimetype,
                    parents: [parents || '1T2xdTFLI5uWVKgRQyzexg7wRm5f9bVzL'],
                },
                media: {
                    mimeType: file.mimetype,
                    body: fs.createReadStream(file.tempFilePath),
                },
            });
            const fileId = data.id;
            await drive.permissions.create({
                fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone',
                },
            });
            const result = await drive.files.get({
                fileId,
                fields: 'id,webViewLink, webContentLink',
            });
            removeTmp(file.tempFilePath);
            return result.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteFile: async (fileId) => {
        try {
            const response = await drive.files.delete({
                fileId,
            });
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateFile: async (idFile, file) => {
        try {
            const response = await drive.files.update({
                uploadType: 'media',
                fileId: idFile,
                media: {
                    mimeType: file.mimetype,
                    body: fs.createReadStream(file.tempFilePath),
                },
            });
            return response.status
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = driveAPI;
