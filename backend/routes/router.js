const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/employees', controller.getEmployees);
router.post('/createemployee', controller.addEmployee);
router.post('/updateemployee', controller.updateEmployee);
router.post('/deleteemployee', controller.deleteEmployee);

module.exports = router;
