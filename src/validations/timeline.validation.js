const fs = require('fs');

const removeTmp = (path) => {
    fs.unlink(path, (err) => {
        if (err) throw err;
    });
};
const timelineValidation = (req, res, next) => {
    try {
        // if (!req.files || Object.keys(req.files).length < 2) {
        //     return res.status(400).json({ msg: 'Kèm ảnh' });
        // }
        // const { avatar, logo } = req.files;
        const { avatar, logo, timeExp, experience } = req.body;
        if (!avatar)
            return res.status(400).json({ msg: 'Ảnh avatar không có' });
        if (!logo)
            return res.status(400).json({ msg: 'Ảnh logo công ty không có' });
        // if (avatar.mimetype !== 'image/png') {
        //     removeTmp(avatar.tempFilePath);
        //     return res.status(400).json({ msg: 'Ảnh avatar không hợp lệ' });
        // }
        // if (logo.mimetype !== 'image/png') {
        //     removeTmp(logo.tempFilePath);
        //     return res.status(400).json({ msg: 'Ảnh avatar không hợp lệ' });
        // }
        if (!timeExp)
            return res.status(400).json({ msg: 'Nhập thời gian thực hiện' });
        if (!experience)
            return res.status(400).json({ msg: 'Nhập kinh nghiệm đạt được' });
        if (experience.length > 150)
            return res.status(400).json({ msg: 'Nhập không quá 150 kí tự' });
        return next();
    } catch (error) {
        return res.status(400).json({ msg: 'Lỗi trong quá trình nhập liệu' });
    }
};

module.exports = timelineValidation;
