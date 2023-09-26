const femaleParentController = require('../Controllers/femaleParentsController')
const express = require('express')
const router = express.Router()

router.get('/femaleparent',femaleParentController.getall)
router.post('/femaleparent',femaleParentController.create)
router.get('/femaleparent/:id',femaleParentController.getone)
router.patch('/femaleparent/:id',femaleParentController.update)
router.delete('/femaleparent/:id',femaleParentController.delete)

module.exports = router