const jwt = require('jsonwebtoken');

const authMiddleware = {
    login: (req, res, next) => {
        try {
            const { password } = req.body;
            if (password.length < 6)
                return res
                    .status(400)
                    .json({ msg: 'Mật khẩu không chính xác' });
            const regexUppercase = /.*[A-Z].*[A-Z]/g;
            if (!regexUppercase.test(password))
                return res
                    .status(400)
                    .json({ msg: 'Mật khẩu không chính xác' });
            const regexLowerCase = /.*[a-z].*[a-z]/g;
            if (!regexLowerCase.test(password))
                return res
                    .status(400)
                    .json({ msg: 'Mật khẩu không chính xác' });
            return next();
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    certificate: (req, res, next) => {
        try {
            const token = req.header('Authorization');
            if (!token) {
                return res.status(400).json({ msg: 'Yêu cầu đăng nhập' });
            }
            jwt.verify(token, process.env.ACCESS_TOKEN, (err) => {
                if (err)
                    return res.status(400).json({ msg: 'Yêu cầu đăng nhập' });
                return next();
            });
            return false;
        } catch (error) {
            return res.status(500).json({ msg: 'Yêu cầu đăng nhập' });
        }
    },
    acceptKey: (req, res, next) => {
        try {
            const key = req.header('Authorization');
            if (!key) {
                return res.status(400).json({ msg: 'Không hợp lệ' });
            }
            jwt.verify(key, process.env.ACCEPT_KEY, (err, result) => {
                if (err) return res.status(400).json({ msg: 'Không hợp lệ' });
                return result;
            });
            return next();
        } catch (error) {
            return res.status(500).json({ msg: 'Không hợp lệ' });
        }
    },
};
module.exports = authMiddleware;
