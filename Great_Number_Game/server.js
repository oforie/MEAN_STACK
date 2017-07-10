// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    // random number generator
    
 res.render("index",{answer:req.session.return, computer_val:req.session.random});
})
// post route for adding a user
app.post('/playerguess', function(req, res) {
 console.log("POST DATA", req.body);
 let guess = req.body.guess;
//  console.log(`the player entered:${guess} `);
  req.session.guess = guess;
  console.log(`this is the player's guess: ${req.session.guess}`);

if (req.session.guess > 100) {
        req.session.return = 'Number must be less than 100';
    }
    else if (req.session.guess < 0) {
        req.session.return = 'Number cannot be less than 0';
    }
    else {
        req.session.random = Math.floor(Math.random() * 101);
        console.log(`this number is randomly generated ${req.session.random}`);
        if (req.session.random === req.session.guess){
            req.session.return = "Correct";
        
        }
        else if (req.session.random > req.session.guess){
            req.session.return = "Low";
          }
        else if (req.session.random < req.session.guess){
            req.session.return = "High";
               }
    }
 res.redirect('index');
});

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});