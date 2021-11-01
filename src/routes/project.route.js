const router = require('express').Router();
const techController = require('../controllers/tech.controller');
const cateProjectController = require('../controllers/cateproject.controller');
const projectController = require('../controllers/project.controller');

router.route('/cate').post(cateProjectController.addCate);
router.route('/tech').post(techController.addTech);

router
    .route('/')
    .post(projectController.addProject)
    .get(projectController.getProject);

router.route('/:id').post(projectController.updateProject);

module.exports = router;
