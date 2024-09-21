
exports.up = function(knex, Promise) {//eslint-disable-line
    return knex.schema
    .createTable('hobbits', tbl => {
      tbl.increments();
      tbl.text('name', 128)
        .unique()
        .notNullable();
      tbl.integer('age')
        .notNullable()
      tbl.text('books', 128)
    })
};


exports.down = function(knex, Promise) {//eslint-disable-line
  return knex.schema
    .dropTableIfExists('hobbits')
};
