exports.up = function(knex) {
  return knex.schema
    .createTable('seasons', function (table) {
       table.integer('season_id').primary();
       table.json('sessions')
       table.json('start_date')
       table.json('end_date')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("seasons")
};