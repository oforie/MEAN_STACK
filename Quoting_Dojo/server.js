
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:2},
    quote: {type:String, required: true, maxlength:500}}, 
    {timestamps: true}
);

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

// root route to render the index.ejs view
app.get('/', function(req, res) {
   
 res.render("index");
})

// handles user quotes
app.post('/quotes', function(req, res) {
 console.log("POST DATA", req.body);
 var new_quote = new Quote({name: req.body.name, quote:req.body.quote});
    new_quote.save(function(err){
        if(err){
            console.log('fix these brother!');
            res.render('index', {title:'attend to these arrors', errors:new_quote.errors});
        } else {
            console.log('a new quote was just added to your db');
            res.redirect('quotes');
        } 
    })
})

// send user directly to quotes page
app.get('/quotes', function(req, res) {
    // console.log('****user is cutting corners to quotes page!****');
     Quote.find({}, function(err, posts){
         if(err){
            console.log('we ran into these bro!');
            res.render('index', {title:'fix this before moving on', errors});
        } else {
            console.log('a new quote was just added to your db');
            res.render('quotes', {posts:posts});   
        }
    })
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})