var express = require('express');
var app = express();

var mongoose = require('./config/mongoose')
var db = mongoose()

var bodyParser = require('body-parser')

var User = require('mongoose').model('User')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('signup')
})

app.post('/signup', function(req, res) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save(function(err) {
        if (err) throw err
        console.log('Saved', user, 'in DB')
    })
})

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('./public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
