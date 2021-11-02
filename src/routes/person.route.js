const router = require('express').Router();
const personController = require('../controllers/person.controller');
const personValidation = require('../validations/person.validation');

router.get('/', personController.getPerson);
router.post('/add', personValidation, personController.addPerson);
router.post('/edit/:id', personValidation, personController.updatePerson);

module.exports = router;
