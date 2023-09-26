const mongoose = require('mongoose')

const curriculumSchema = new mongoose.Schema({
    hoursperweek: {
        type: Number,
        required: true
    },
    numberofdays: {
        type: Number,
        required: true
    },
    agegroup: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    employeesid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'daycareemployees'
    }
},{
    timestamps: true
})

module.exports = curriculumSchema;