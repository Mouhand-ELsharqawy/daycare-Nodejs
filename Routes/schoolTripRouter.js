const schoolTripController = require('../Controllers/schoolTripController')
const express = require('express')
const router = express.Router()

router.get('/trip',schoolTripController.getall)
router.post('/trip',schoolTripController.create)
router.get('/trip/:id',schoolTripController.getone)
router.patch('/trip/:id',schoolTripController.update)
router.delete('/trip/:id',schoolTripController.delete)

module.exports = router