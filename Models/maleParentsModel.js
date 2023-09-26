const mongoose = require('mongoose')
const maleParentSchema = require('../Schema/maleParentsSchema')

const maleParentModel = mongoose.model('maleparents',maleParentSchema)

module.exports = maleParentModel;