//var config = require('./config')
var mongoose = require('mongoose')
var url = 'mongodb://localhost/event-mirror'

module.exports = function () {
    var db = mongoose.connect(url)

    require('../models/user.js')
    
    return db
}
