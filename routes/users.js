var express = require('express');
var router = express.Router();

const Models = require('../lib/models');

/* GET users listing. */
// GET /users/
router.get('/', function(req, res, next) {
  Models.User.fetchAll().then(function(users) {
    var my_vars = {};
    var user_key = "users";
    my_vars[user_key] = users;
    res.render('users', my_vars);
  });
  // res.render('users');
});

// GET /users/:id
router.get('/:id', function(req, res, next) {
  Models.User.where('id', req.params.id).fetch().then(function(user) {
    // res.send(user.toJSON());
    res.locals.user = user;
    res.render('user');
  })
  // res.send('NOPE');
  // res.render('user');
  // next();
});

// POST /users/
router.post('/', function(req, res, next) {

});

module.exports = router;
