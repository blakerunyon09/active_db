const router = require('express').Router()
const axios = require('axios').default;
const body = require('./requests/active_requests').body
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/seasons/fetch', (req, res) => {
  axios.post( 'https://awapi.active.com/rest/camps-season-info', body )
  .then(({ data }) => {
    seasonsArray = []
    data.map(season => {
        season = {
          season_id: season.seasonId,
          sessions: JSON.stringify(season.sessionIds),
          start_date: JSON.stringify(season.firstDateTime),
          end_date: JSON.stringify(season.lastDateTime),
          current_season: season.firstDateTime.year == 2021
        }
        seasonsArray.push(season)
      })
    database('seasons')
    .insert(seasonsArray)
    .onConflict('season_id')
    .merge()
    .then(r => res.status(201).send({msg: "Success"}))
  })
  .catch((err) => { console.log(err); throw err })
})

router.get('/seasons', (_, res) => {
  database('seasons')
  .then(seasons => res.send(seasons))
})

module.exports = router
