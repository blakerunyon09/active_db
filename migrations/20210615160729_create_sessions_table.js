exports.up = function(knex) {
  return knex.schema
    .createTable('sessions', function (table) {
       table.integer('session_id', { primaryKey: true });
       table.string('session_name')
       table.json('start_date')
       table.json('end_date')
       table.string('availability')
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("sessions")
};