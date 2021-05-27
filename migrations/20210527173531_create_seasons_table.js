exports.up = function(knex) {
  return knex.schema
    .createTable('seasons', function (table) {
       table.increments('season_id', { primaryKey: true });
       table.json('sessions')
       table.json('start_date')
       table.json('end_date')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("seasons")
};