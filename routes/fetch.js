const router = require('express').Router()
const axios = require('axios').default;
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/', (req, res) => {

  body = {
    "appToken": "Px7U0We8xt9MKovt8kzYioy2KyfGvbv9Expp4GMagwUBcPVpvoI04nKxTSnC+A8j",
    "request": {
        "applicationName": "Avid4AdventureNew",
        "userName": "blake@avid4.com",
        "password": "Gigglys5",
        "seasonIds": []
    }
  }

  axios.post( 'https://awapi.active.com/rest/camps-season-info', body )
  .then(res.send("cha."))
  .catch(function (error) {
    res.send({error: error.data});
  })
})

router.get('/seasons', (_, res) => {
  database('seasons')
  .then(seasons => res.send(seasons))
})

module.exports = router