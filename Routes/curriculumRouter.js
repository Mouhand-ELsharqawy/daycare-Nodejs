const curriculumController = require('../Controllers/curriculumController')
const express = require('express')
const router = express.Router()

router.get('/curriculum',curriculumController.getall)
router.post('/curriculum',curriculumController.create)
router.get('/curriculum/:id',curriculumController.getone)
router.patch('/curriculum/:id',curriculumController.update)
router.delete('/curriculum/:id',curriculumController.delete)

module.exports = router