const mongoose = require('mongoose')
const programSchema = require('../Schema/ProgramSchema')

const programModel = mongoose.model('programs',programSchema)

module.exports = programModel;