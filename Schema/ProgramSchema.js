const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
    programname: {
        type: String,
        required: true
    },
    numberofemployees: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    contactphone: {
        type: String,
        required: true
    },
    employeesid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'daycareemployees'
    }
}, {
    timestamps: true
})

module.exports = programSchema;