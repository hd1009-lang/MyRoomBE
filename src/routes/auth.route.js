const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const authMiddleWare = require('../middlewares/auth.middleware');

router.post('/login', authMiddleWare.login, authController.login);
router.post('/get-access',authController.getAccessToken);
router.get('/logout',authController.logout)
module.exports = router;
