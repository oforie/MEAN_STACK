var bcrypt = require('bcrypt');


var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
    register: function(req, res){
        var password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
        console.log(req.body);
        console.log(password, '******this is the hashed password');
    
        var user = new User ({first_name:req.body.first_name, last_name:req.body.last_name, email:req.body.email, password:password})
    // saving user to database
        user.save(function(err, user){
            if(err){
                console.log(err);
                console.log(user.errors, '*****line 18 user.errors print****')
                res.render('index',{errors:user.errors})
            } else {
                console.log(req.body.first_name, 'has been saved to your database')
            }
        })

    },

// login works!
    login: function(req, res){
        User.findOne({email:req.body.email}, function(err, user){
        // work on error handling
            if(err){
                console.log('****could not locate email in db')
                res.render('index', {errors:user.errors})
            } else {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    console.log('****we have a match****')
                    console.log(user.password)
                    // not correctly storing user id
                    req.session.id = user.id;
                    // console.log(user.id, "*****user id")
                    // console.log(req.session.id, '******session store');
                    res.render('success',{user:user})
                }
            }
        })
    }
}