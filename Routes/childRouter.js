const childController = require('../Controllers/childsController')
const express = require('express')
const router = express.Router()

router.get('/child',childController.getall)
router.post('/child',childController.create)
router.get('/child/:id',childController.getone)
router.patch('/child/:id',childController.update)
router.delete('/child/:id',childController.delete)

module.exports = router