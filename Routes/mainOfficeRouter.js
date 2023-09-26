const mainOfficeController = require('../Controllers/mainofficeController')
const express = require('express')
const router = express.Router()

router.get('/mainoffice',mainOfficeController.getall)
router.post('/mainoffice',mainOfficeController.create)
router.get('/mainoffice/:id',mainOfficeController.getone)
router.patch('/mainoffice/:id',mainOfficeController.update)
router.delete('/mainoffice/:id',mainOfficeController.delete)

module.exports = router