const mongoose = require('mongoose')
const schoolTripSchema = require('../Schema/schoolTripSchema')

const schoolTripModel = mongoose.model('schooltrips', schoolTripSchema)

module.exports = schoolTripModel;