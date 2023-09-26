const mongoose = require('mongoose')

const schoolTripSchema = new mongoose.Schema({
    chaperones: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: true,
        minLength: 10
    }
},{
    timestamps: true
})

module.exports = schoolTripSchema;