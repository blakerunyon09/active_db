const express = require('express')
var cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8080

// JSON & CORS MIDDLEWARE
app.use(express.json())
app.use(cors())

// IMPORT ROUTES
const seasons = require('./routes/seasons')
const sessions = require('./routes/sessions')

// ROUTES
app.use('/api', seasons)
app.use('/api', sessions)

app.get('/', (_, res) => {
  res.send("Cha.")
})

// BOOT SERVER
app.listen(PORT, ()=> {console.log(`Serving on PORT ${PORT}`)})