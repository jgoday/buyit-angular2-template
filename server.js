const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

// browser sync
if (app.get('env') === 'development')
{
    const browserSync = require('browser-sync').create()
    browserSync.init({
        files: [ "./public/*.html", "./public/*.js" ],
        ignoreInitial: false
    });
    app.use(require('connect-browser-sync')(browserSync))
}

// static files
app.use(express.static('public'))

// middleware (json, ...)
app.use(bodyParser.json())

// db
const db = require('./app/db')
db.initialize(process.env.BUYIT_DB_URL)

// api
const api = require('./app/routes/api')
app.use('/api', api)

// listen on defined port
app.listen(port, (_) =>
{
    console.log(`LISTENING ON ${port}`)
})