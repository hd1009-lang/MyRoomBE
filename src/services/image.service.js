const Image = require('../models/image.module');
const CateImg = require('../models/category--img.module');

const imageService = {
    addImage: async (info) => {
        try {
            const image = await Image.findOne({ nameFile: info.name });
            if (image) throw new Error('Đã tồn tại');
            const newTech = new Image({
                idFile: info.id,
                nameFile: info.name,
                urlShow: info.url,
                cate: info.cate,
            });
            await newTech.save();
            return newTech;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getImage: async (cate) => {
        try {
            const idCate = await CateImg.findOne({ name: cate }).select('_id');
            if (!idCate) throw new Error('Không tồn tại');
            const result = await Image.find({ cate: idCate });
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getAllImage: async () => {
        try {
            const data = await Image.find().populate('cate', 'name');
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    addCateImg: async (info) => {
        const newInfo = info.toLowerCase();
        try {
            const cate = await CateImg.findOne({ name: newInfo });
            if (cate) throw new Error('Đã tồn tại');
            const newCate = new CateImg({
                name: newInfo,
            });
            await newCate.save();
            return newCate;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getCateImg: async () => {
        try {
            const data = await CateImg.find({});
            return data;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = imageService;
