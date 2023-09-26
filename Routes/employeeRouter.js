const employeeController = require('../Controllers/employeeController')
const express = require('express')
const router = express.Router()

router.get('/employee',employeeController.getall)
router.post('/employee',employeeController.create)
router.get('/employee/:id',employeeController.getone)
router.patch('/employee/:id',employeeController.update)
router.delete('/employee/:id',employeeController.delete)

module.exports = router