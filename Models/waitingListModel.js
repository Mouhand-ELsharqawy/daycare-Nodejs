const mongoose = require('mongoose')
const waitingListSchema = require('../Schema/waitingListSchema')

const waitingListModel = mongoose.model('waitinglists',waitingListSchema)

module.exports = waitingListModel;