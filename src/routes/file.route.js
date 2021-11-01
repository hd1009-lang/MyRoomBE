const router = require('express').Router()
const fileController = require('../controllers/file.controller')


router.post('/upload',fileController.uploadFile)
router.post('/update',fileController.updateFile)
module.exports = router