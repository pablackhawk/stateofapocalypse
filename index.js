// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// Express App
let app = express()
const PORT = process.env.PORT || 5150

// Models
let db = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
