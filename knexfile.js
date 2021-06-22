// const pg = require('pg')
// pg.defaults.ssl = {
//    require:true,
//    rejectUnauthorized:false
// }

module.exports = {
  development: {
     client: 'pg',
     connection: 'postgres:///avid4_db'
  },
  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
      directory: './migrations',
   },
   seeds: { 
      directory: './seeds' 
   }
  }
} 