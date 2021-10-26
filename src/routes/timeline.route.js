const router = require('express').Router();
const TimelineController = require('../controllers/timeline.controller');
const timelineValidation = require('../validations/timeline.validation');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', TimelineController.dowloadCV);
router.post(
    '/add',
    authMiddleware.certificate,
    timelineValidation,
    TimelineController.addTimeline
);
module.exports = router;
