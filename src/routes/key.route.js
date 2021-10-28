const router = require('express').Router();
const keyController = require('../controllers/key.controller');
const { certificate } = require('../middlewares/auth.middleware');
const acceptKeyValidation = require('../validations/acceptKey.validation');

router.post('/', certificate, acceptKeyValidation, keyController.createKey);

module.exports = router;
