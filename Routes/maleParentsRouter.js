const maleParentcontroller = require('../Controllers/maleParentsController')
const express = require('express')
const router = express.Router()

router.get('/maleparent',maleParentcontroller.getall)
router.post('/maleparent',maleParentcontroller.create)
router.get('/maleparent/:id',maleParentcontroller.getone)
router.patch('/maleparent/:id',maleParentcontroller.update)
router.delete('/maleparent/:id',maleParentcontroller.delete)

module.exports = router