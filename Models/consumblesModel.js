const mongoose = require('mongoose')
const consumblesSchema = require('../Schema/consumblesSchema')


const consumbleModel = mongoose.model('consumbles', consumblesSchema)

module.exports = consumbleModel;