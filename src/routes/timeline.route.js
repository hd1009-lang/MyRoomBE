const router = require('express').Router();
const TimelineController = require('../controllers/timeline.controller');
const timelineValidation = require('../validations/timeline.validation');
const authMiddleware = require('../middlewares/auth.middleware');
const auth = require('../middlewares/auth.middleware');

// router.get('/', TimelineController.downloadCV);
router.get('/list', auth.acceptKey, TimelineController.getTimeline);
router.post(
    '/add',
    // authMiddleware.certificate,
    timelineValidation,
    TimelineController.addTimeline
);
router.post('/edit', TimelineController.updateTimeline);
module.exports = router;
