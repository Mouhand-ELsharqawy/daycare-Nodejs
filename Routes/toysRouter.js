const toyController = require('../Controllers/toysController')
const express = require('express')
const router = express.Router()

router.get('/toy',toyController.getall)
router.post('/toy',toyController.create)
router.get('/toy/:id',toyController.getone)
router.patch('/toy/:id',toyController.update)
router.delete('/toy/:id',toyController.delete)

module.exports = router