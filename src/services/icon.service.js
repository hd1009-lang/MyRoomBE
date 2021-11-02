const Icon = require('../models/icon.module');

const iconService = {
    addIcon: async (info) => {
        try {
            const icon = await Icon.findOne({ nameFile: info.name });
            console.log(icon);
            if (icon) throw new Error('Đã tồn tại');
            const newTech = new Icon({
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

module.exports = iconService;
