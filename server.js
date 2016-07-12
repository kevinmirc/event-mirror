var express = require('express');
var app = express();

var mongoose = require('./config/mongoose')
var db = mongoose()

var User = require('mongoose').model('User')
var newUser = new User({
    email: 'email',
    password: 'password'
})



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
