const mongoose = require('mongoose')
const childrensSchema = require('../Schema/childrensSchema')

const childrenModel = mongoose.model('childrens', childrensSchema)

module.exports = childrenModel;