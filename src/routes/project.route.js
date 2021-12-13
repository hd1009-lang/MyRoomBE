const router = require('express').Router();
const cateProjectController = require('../controllers/cateproject.controller');
const projectController = require('../controllers/project.controller');

router
    .route('/cate')
    .post(cateProjectController.addCate)
    .get(cateProjectController.getCateProject);

router.route('/cate/:id').delete(cateProjectController.deleteCateProject);

router
    .route('/')
    .post(projectController.addProject)
    .get(projectController.getProject);

router.route('/:id').post(projectController.updateProject);

router.route('/with-cate/:id').get(projectController.getProjectWithCate);

module.exports = router;
