const express = require('express')
var cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8080

// KNEX IMPORT
const databaseConfig = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

// JSON MIDDLEWARE
app.use(express.json())

// CORS MIDDLEWARE
app.use(cors())

// TEST ROUTE
app.get('/', (req, res) => {
  res.send("Cha.")
})

// IMPORT ROUTES
const fetch = require('./routes/fetch')

// ROUTES
app.use('/api', fetch)

// BOOT SERVER
app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})