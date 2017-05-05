var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var expressSession = require('express-session');

// mongoose.connect('mongodb://localhost/learnapp');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(8000, function(){
  console.log("LearnApp up and running on 8000");
})
