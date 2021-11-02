const router = require('express').Router();
const configController = require('../controllers/config.controller');
const iconController = require('../controllers/icon.controller');

// const authMiddleWare = require('../middlewares/auth.middleware')

router.get('/', configController.getListConfig);
router.route('/icon').post(iconController.addIcon);


module.exports = router;
