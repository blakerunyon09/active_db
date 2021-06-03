
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('seasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('seasons').insert([
        {
          season_id: 1, 
          sessions: "[123, 234, 345]", 
          start_date: JSON.stringify({cha: 'cha', bra: 'bra'}), 
          'end_date': JSON.stringify({'cha': 'end_cha', 'bra': 'end_bra'})
        }
      ]);
    });
};
