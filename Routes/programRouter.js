const programController = require('../Controllers/programController')
const express = require('express')
const router = express.Router()

router.get('/program',programController.getall)
router.post('/program',programController.create)
router.get('/program/:id',programController.getone)
router.patch('/program/:id',programController.update)
router.delete('/program/:id',programController.delete)

module.exports = router;