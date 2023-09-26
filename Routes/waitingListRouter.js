const waitingListController = require('../Controllers/waitingListController')
const express = require('express')
const router = express.Router()

router.get('/waitinglist',waitingListController.getall)
router.post('/waitinglist',waitingListController.create)
router.get('/waitinglist/:id',waitingListController.getone)
router.patch('/waitinglist/:id',waitingListController.update)
router.delete('/waitinglist/:id',waitingListController.delete)

module.exports = router