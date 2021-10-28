const authService = require('../services/auth.service');
const tokenService = require('../services/token.service');

const authController = {
    login: async (req, res) => {
        try {
            const { password } = req.body;
            const result = await authService.login(password);
            tokenService.generateRefreshTokens(result, res);
            return res.status(200).json({ msg: 'Login success' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getAccessToken: (req, res) => {
        try {
            const accessToken = tokenService.generateAccessTokens(req);
            return res.json({ token: accessToken });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    logout:(req,res)=>{
        try {
            res.clearCookie('refreshToken', {path: '/api/user/get-access'})
            return res.json({msg: "Logged out."})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    getAcceptToken: async(req,res)=>{
        try {
            const acceptToken = tokenService.generateAcceptToken(req.body.password);
            return res.status(200).json({key:acceptToken})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
};

module.exports = authController;
