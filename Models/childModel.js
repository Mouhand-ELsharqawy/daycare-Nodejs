const mongoose = require('mongoose')
const  childSchemas  = require('../Schema/childsSchema')

const childModel = mongoose.model('childs',childSchemas)

module.exports = childModel;