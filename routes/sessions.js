const router = require('express').Router()
const axios = require('axios').default;
const body = require('./requests/active_request').body
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/sessions/fetch', (_, res) => {
    database('seasons')
    .select('sessions')
    .then(r => res.send(r))
    .catch((err) => { console.log(err); throw err })
})

router.get('/sessions', (_, res) => {
  database('seasons')
  .then(seasons => res.send(seasons))
})

module.exports = router
