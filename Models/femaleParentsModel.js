const mongoose = require('mongoose')
const femaleParentSchema = require('../Schema/femaleParentsSchema')

const femaleParentModel = mongoose.model('femaleparents', femaleParentSchema)

module.exports = femaleParentModel;