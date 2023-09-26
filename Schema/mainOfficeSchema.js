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

const mainOfficeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    managername: nameSchema,
    employeesid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'daycareemployees'
    }
}, {
    timestamps: true
})

module.exports = mainOfficeSchema;