const router = require('express').Router()
const fileController = require('../controllers/file.controller')


router.post('/upload',fileController.uploadFile)

module.exports = router