// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;

// Mongoose schema
// ##################################################################################################
var Schema = mongoose.Schema;

var messageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:4},
    message: {type: String, required: true},
    comments: [{type:Schema.Types.ObjectId, ref: 'Comment'}]}, {timestamps:true}
);
 mongoose.model('Message', messageSchema);
var Message = mongoose.model('Message');

var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, reg: 'Message'},
    comments: {type: String, required: true}}, {timestamps: true}
);
mongoose.model('Comment', commentSchema);
var Comments = mongoose.model('Comment')


// #####################################################################################################


// root route to render the index.ejs view
app.get('/', function(req, res) {
    // query for messages here
 res.render("index");
})


// post route for adding a message
app.post('/messages', function(req, res) {
 console.log("POST DATA", req.body);
 


 res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});