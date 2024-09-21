exports.seed = function(knex, Promise) {//eslint-disable-line
  return knex('hobbits').truncate()
    .then(function () {
      return knex('hobbits').insert([
        { name: 'Bilbo Baggins', age: 130, books: 'The Hobbit & LOTR'},
        { name: 'Frodo Baggins', age: 50, books: 'LOTR'},
        { name: 'Harry Pippen', age: 69, books: ''}
      ])
    })
};
