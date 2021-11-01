require('dotenv').config();
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRETKEY,
    secure: true,
});

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};

const hanleUploadImg = {
    uploadImg: async (image) => {
        try {
            // cloudinary.uploader.destroy()
            let result = {};
            await cloudinary.uploader.upload(
                image.tempFilePath,
                { folder: 'myroom' },
                async (err, rs) => {
                    if (err) throw new Error(err.message);
                    const infoImg = {
                        id: rs.public_id,
                        url: rs.url,
                    };
                    result = infoImg;
                    // removeTmp(image.tempFilePath);
                }
            );
            return result;
        } catch (error) {
            const newError = new Error(`Lỗi trong quá trình upload ${error}`);
            throw newError;
        }
    },
    uploadManyImg: async (images) => {
        const listInput = Object.values(images);
        try {
            const result = [];
            // eslint-disable-next-line no-restricted-syntax
            for (const file of listInput) {
                // eslint-disable-next-line no-await-in-loop
                const rs = await hanleUploadImg.uploadImg(file);
                result.push(rs);
            }
            return result;
        } catch (error) {
            const newError = new Error(
                `Lỗi trong quá trình upload ${error.message}`
            );
            throw newError;
        }
    },
};

module.exports = hanleUploadImg;
