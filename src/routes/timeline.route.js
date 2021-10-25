const router = require('express').Router();
const TimelineController = require('../controllers/timeline.controller')
const checkImg = require('../validations/uploadImg.validation')
const timelineValidation = require('../validations/timeline.validation')


router.get('/',TimelineController.dowloadCV);
router.post('/add',checkImg,timelineValidation,TimelineController.addTimeline)
module.exports = router;
