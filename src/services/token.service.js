const jwt = require('jsonwebtoken');
const token = require('../utils/createToken');

const tokenService = {
    generateRefreshTokens: (payload, res) => {
        try {
            const refreshToken = token.createRefreshToken({
                password: payload.password,
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/api/user/get-access',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            return;
        } catch (error) {
            throw new Error('Lỗi đăng nhập');
        }
    },
    generateAccessTokens: (req) => {
        try {
            const rfToken = req.cookies.refreshToken;
            let accessToken;
            if (!rfToken) throw new Error('Yêu cầu đăng nhập');
            jwt.verify(rfToken, process.env.REFRESH_TOKEN, (err, user) => {
                if (err) throw new Error('Yêu cầu đăng nhập');
                accessToken = token.createAccessToken({
                    password: user.password,
                });
            });
            return accessToken;
        } catch (error) {
            throw new Error('Lỗi xác thực');
        }
    },
};

module.exports = tokenService;
