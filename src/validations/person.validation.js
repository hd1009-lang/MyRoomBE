function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const personValidation = (req, res, next) => {
    const { name, phone, email, society } = req.body;
    try {
        if (name && name.length < 3)
            return res.status(400).json({ msg: 'Tên phải trên 3 kí tự' });
        if (phone && phone.length < 10)
            return res.status(400).json({ msg: 'Số điện thoại phải từ 10 số' });
        if (email && !validateEmail(email))
            return res.status(400).json({ msg: 'Không đúng định dạng mail' });
        if (society && !Array.isArray(society) && !society.length < 1)
            return res.status(400).json({ msg: 'Không được để trống' });
        if (society) {
            // eslint-disable-next-line no-restricted-syntax
            for (const item of society) {
                if (!item.img || !item.url) {
                    return res
                        .status(400)
                        .json({ msg: 'Không được để trống thông tin profile' });
                }
            }
        }
        return next();
    } catch (error) {
        return res.status(400).json({ msg: 'Có lỗi trong quá trình cập nhật' });
    }
};

module.exports = personValidation;
