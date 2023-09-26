const mongoose = require('mongoose')
const curriculumSchema = require('../Schema/curriculumSchema')

const curriculumModel = mongoose.model('curriculums',curriculumSchema)

module.exports = curriculumModel;