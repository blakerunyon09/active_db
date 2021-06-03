const express = require('express')
var cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8080

// JSON & CORS MIDDLEWARE
app.use(express.json())
app.use(cors())

// IMPORT ROUTES
const fetch = require('./routes/fetch')

// ROUTES
app.use('/api', fetch)

// BOOT SERVER
app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})