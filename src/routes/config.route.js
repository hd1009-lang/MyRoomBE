const router = require('express').Router();
const configController = require('../controllers/config.controller');
// const authMiddleWare = require('../middlewares/auth.middleware')

router.get('/', configController.getListConfig);
module.exports = router;
