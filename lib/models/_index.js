// Initialize the query builder/connection
const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'jamessapara',
    password : '',
    database : 'clocktower2_development',
    charset  : 'utf8'
  }
});

// Config the ORM
var bookshelf = require('bookshelf')(knex);

// Import models
const User = require('./user')(bookshelf);

// Massive export of all our ORM
module.exports = {
  knex: knex,
  bookshelf: bookshelf,
  User: User
};
