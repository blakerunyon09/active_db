const router = require('express').Router()
const axios = require('axios').default;
const body = require('./requests/active_request').body
require('dotenv').config()

// KNEX IMPORT
const databaseConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(databaseConfig)

router.get('/sessions/fetch', (_, res) => {
  const groupedSessions = []
  database('seasons')
  .select('sessions')
  .then(seasons => {
    let sessions = seasons.map(season => {
      return [...season.sessions]
    }).flat()
    for(let i = 0; i < sessions.length; i += 2000 ){
      groupedSessions.push(sessions.slice(i,i + 1999))
    }
    console.log(groupedSessions)
  })
  .then(_ => {
    let = sessionsArray = []
    for(let j = 0; j < groupedSessions.length; j++){
        axios.post( 'https://awapi.active.com/rest/camps-session-info', {...body, ...body.request.sessionIds = groupedSessions[j]} )
        .then(({data}) => {
          data.map(session => {
              session = {
                session_id: session.seasonId,
                session_name: session.name,
                start_date: JSON.stringify(session.startDate),
                end_date: JSON.stringify(session.endDate),
                availability: session.availability
              }
              sessionsArray.push("Cha.")
            }) 
          // .then(r => res.status(201).send({msg: "Success"}))
        })
      }
      database('sessions')
      .insert(sessionsArray)
      // .onConflict('session_id')
      // .merge()
      // .then(console.log(sessionsArray))
  })
  .then(res.send("Run."))
  .catch((err) => { console.log(err); throw err })
})

router.get('/sessions', (_, res) => {
  database('sessions')
  .then(sessions => res.send(sessions))
})

module.exports = router

// {
//   sessionId: '12129802',
//   name: '2nd-4th Grade Program Session 1',
//   startDate: { day: 12, month: 6, year: 2016 },
//   endDate: { day: 19, month: 6, year: 2016 },
//   registrationOpenDate: { day: 2, month: 11, year: 2015 },
//   registrationCloseDate: { day: 11, month: 6, year: 2016 },
//   location: {
//     address: {
//       line1: '1501 Empire Dr',
//       line2: '',
//       city: 'Louisville',
//       country: 'United States',
//       province: 'Colorado',
//       postalCode: '80027'
//     },
//     name: 'zzz- Expedition Program - CO'
//   },
//   availability: 'ONLINE',
//   genderRestriction: null,
//   ageRestrictionDate: null,
//   minAgeRestriction: null,
//   maxAgeRestriction: null,
//   minGradeRestriction: 'GRADE_2',
//   maxGradeRestriction: 'GRADE_4',
//   earlyBirdPricingDate: null,
//   waitlistEnabled: true,
//   tuitionIds: [ '20583002' ],
//   sessionOptionIds: [
//     '23447302', '23446602',
//     '23447102', '23446902',
//     '23446702', '23447002',
//     '23447202', '23446802',
//     '23447402', '24028103',
//     '24028003', '28304901'
//   ],
//   dayOvernight: 'OVERNIGHT',
//   daysOfWeek: [],
//   startTimeOfDay: null,
//   endTimeOfDay: null,
//   sessionType: 'Overnight',
//   capacity: 39
// }