// Constructor module, takes a parameter and returns a built object
// Used like this: var User = require('./user')(bookshelf);
module.exports = function(bookshelf) {
  var User = bookshelf.Model.extend({
    tableName: 'users'
  });
  return User;
}
