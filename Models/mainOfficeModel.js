const mongoose = require('mongoose')
const mainOfficeSchema = require('../Schema/mainOfficeSchema')

const mainOfficeModel = mongoose.model('mainoffice',mainOfficeSchema)

module.exports = mainOfficeModel;