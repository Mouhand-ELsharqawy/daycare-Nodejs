const mongoose = require('mongoose')

const addressSchema =  new mongoose.Schema({
    square: String,
    street: String,
    building: String,
    appartment: Number
})

const waitingListSchema = new mongoose.Schema({
    familyname: {
        type: String,
        required: true
    },
    address: addressSchema,
    comments: {
        type: String,
        required: true
    },
    placementdate: {
        type: Date,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = waitingListSchema;