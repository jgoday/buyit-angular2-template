const mongoose = require('mongoose')

const initialize = (connectionString) =>
{
    console.log(`Initialize mongodb`)
    mongoose.connect(connectionString)
}

module.exports = {
    initialize
}