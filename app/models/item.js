const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: String,
    comments: String,
    date: Date,
    urls: [{
        url: String,
        date: Date,
        price: Number
    }]
})

module.exports = mongoose.model('Item', ItemSchema)