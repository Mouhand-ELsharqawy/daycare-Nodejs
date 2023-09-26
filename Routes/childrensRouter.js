const childrenController = require('../Controllers/childrensController')
const express = require('express')
const router = express.Router()

router.get('/children',childrenController.getall)
router.post('/children',childrenController.create)
router.get('/children/:id',childrenController.getone)
router.patch('/children/:id',childrenController.update)
router.delete('/children/:id',childrenController.delete)

module.exports = router