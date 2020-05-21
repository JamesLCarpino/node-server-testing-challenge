
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boogers')
  .truncate()
  .then(function() {
    return knex('boogers').insert([
      { name: 'sticky', color: 'yellow' },
      { name: 'crusty', color: 'grey' },
      { name: 'huge', color: 'green' },
      { name: 'gooey', color: 'yellow-green' },
    ]);
  });
};
