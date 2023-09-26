const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

const addressSchema = new mongoose.Schema({
    square: String,
    street: String,
    building: String,
    appartment: Number
})
const employeeSchema = new mongoose.Schema({
    name: nameSchema,
    address: addressSchema,
    socialsecurity: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true,
        minLength: 10
    }
},{
    timestamps: true
})

module.exports = employeeSchema;