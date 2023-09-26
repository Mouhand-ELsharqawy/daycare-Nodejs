const mongoose = require('mongoose')
const employeeSchema = require('../Schema/employeeSchema')


const employeeModel = mongoose.model('daycareemployees', employeeSchema)

module.exports = employeeModel;