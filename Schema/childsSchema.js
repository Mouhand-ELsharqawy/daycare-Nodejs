const mongoose = require('mongoose')

const childsSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    currentlocation: {
        type: String,
        required: true
    },
    childrensid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'childrens'
    }
},{
    timestamps: true
})

module.exports = childsSchema