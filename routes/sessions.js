const router = require('express').Router()
const axios = require('axios').default;
const body = require('./requests/active_request').body
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/sessions/fetch', (_, res) => {
  let sessMemory = []
  const allSessions = []
  let count = 0
  database('seasons')
  .select('sessions')
  .then(sessions => {
    sessions.map(session => {
    sessMemory.push(session.sessions)
    })
    sessMemory = sessMemory.flat()
    for(let i = 0; i < sessMemory.length; i += 1000 ){
      allSessions.push(sessMemory.slice(0,999))
    }
    res.send(allSessions)
  })
  .catch((err) => { console.log(err); throw err })
})

router.get('/sessions', (_, res) => {
  database('seasons')
  .then(seasons => res.send(seasons))
})

module.exports = router
