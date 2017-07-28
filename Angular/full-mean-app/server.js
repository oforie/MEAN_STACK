// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

var session = require('express-session');
app.use(session({
    secret: 'codingdojorocks',
    resave: false,
    saveUninitialized: true
}))


var mongoose = require('mongoose');

// use it!
app.use(bodyParser.json( ));
// static content
app.use(express.static(path.join(__dirname, "./client/dist")));
// setting up ejs and our views folder

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
