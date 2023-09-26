const mongoose = require('mongoose')

const toysSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    purchasedate: {
        type: Date,
        required: true
    },
    programsid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'programs'
    }
}, {
    timestamps: true
})

module.exports = toysSchema;