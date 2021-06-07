exports.up = function(knex) {
  return knex.schema.table('seasons', function(table) {
    table.boolean('current_season')
  })
};

exports.down = function(knex) {
  return knex.schema.table('seasons', function(table) {
    table.dropColumn('current_season')
  })
};
