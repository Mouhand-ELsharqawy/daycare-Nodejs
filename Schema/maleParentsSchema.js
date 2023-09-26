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

const addressSchema =  new mongoose.Schema({
    square: String,
    street: String,
    building: String,
    appartment: Number
})

const maleParentSchema = new mongoose.Schema({
    name: nameSchema,
    address: addressSchema,
    contactnumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = maleParentSchema