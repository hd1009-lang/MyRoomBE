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
            throw new Error(error);
        }
    },
    addCateImg: async (info) => {
        try {
            const cate = await CateImg.findOne({ name: info });
            if (cate) throw new Error('Đã tồn tại');
            const newCate = new CateImg({
                name: info,
            });
            await newCate.save();
            return newCate;
        } catch (error) {
            throw new Error(error);
        }
    },
    getImage: async (cate) => {
        try {
            const idCate = await CateImg.findOne({ name: cate }).select('_id');
            if (!idCate) throw new Error('Không tồn tại');
            const result = await Image.find({ cate: idCate });
            return result;
        } catch (error) {
            throw new Error(error);
        }
    },
};

module.exports = imageService;
