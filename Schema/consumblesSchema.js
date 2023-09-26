const mongoose = require('mongoose')

const consumblesSchema = new mongoose.Schema({
    fingerpaint: {
        type: String,
        required: true
    },
    paper: {
        type: String,
        required: true
    },
    cleaning: {
        type: String,
        required: true
    },
    sippycups: {
        type: String,
        required: true
    },
    spoons: {
        type: String,
        required: true
    },
    crayons: {
        type: String,
        required: true
    }, 
    garbagebag: {
        type: String,
        required: true
    },
    diapers: {
        type: String,
        required: true
    },
    forks: {
        type: String,
        required: true
    },
    pencil: {
        type: String,
        required: true
    },
    bowls: {
        type: String,
        required: true
    },
    babywipes: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = consumblesSchema