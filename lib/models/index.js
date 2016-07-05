var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'jamessapara',
    password : '',
    database : 'clocktower2_development',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = {
  knex: knex,
  bookshelf: bookshelf,
  User: require('./user')(bookshelf)
  // TimeEntry: require('./time_entry')
}
