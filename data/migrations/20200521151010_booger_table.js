
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('boogers', tbl =>{
        tbl.increments()

        tbl.string('name', 128).notNullable()
        tbl.string('color', 128)
        
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boogers')
};
