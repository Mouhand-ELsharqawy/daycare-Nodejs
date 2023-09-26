const mongoose = require('mongoose')
const toysSchema = require('../Schema/toysSchema')

const toyModel = mongoose.model('toys',toysSchema)

module.exports = toyModel;