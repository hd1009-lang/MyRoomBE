const router = require('express').Router();
const configController = require('../controllers/config.controller');
const imageController = require('../controllers/image.controller');

// const authMiddleWare = require('../middlewares/auth.middleware')

router.get('/', configController.getListConfig);

router
    .route('/image')
    .post(imageController.addImage)
    .get(imageController.getAllImg);
router.get('/image/:cate', imageController.getImage);

router
    .route('/cate--img')
    .post(imageController.addCateImage)
    .get(imageController.getCateImage);

module.exports = router;
