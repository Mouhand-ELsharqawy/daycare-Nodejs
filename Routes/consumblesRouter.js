const consumbleController = require('../Controllers/consumblesController')
const express = require('express')
const router = express.Router()

router.get('/consumble',consumbleController.getall)
router.post('/consumble',consumbleController.create)
router.get('/consumble/:id',consumbleController.getone)
router.patch('/consumble/:id',consumbleController.update)
router.delete('/consumble/:id',consumbleController.delete)

module.exports = router