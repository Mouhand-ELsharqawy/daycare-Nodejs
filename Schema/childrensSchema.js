const mongoose = require('mongoose')

const childrensSchema = new mongoose.Schema({
    nappinghours: {
        type: Number,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    extrainfo: {
        type: String,
        required: true,
        minLength: 10
    },
    behavior: {
        type: String,
        required: true,
        minLength: 10
    },
    playinglocation: {
        type: String,
        required: true
    },
    femaleparentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'femaleparents'
    },
    maleparentsid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'maleparents'
    }
},
{
    timestamps: true
})

module.exports = childrensSchema;