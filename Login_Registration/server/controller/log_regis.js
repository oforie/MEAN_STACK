var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

module.exports = {
    register: (req, res)=>{
        if (req.body.password != req.body.pw_confirm){
            res.render('index', {error:"Please enter matching passwords"})
        } else {

            let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
            console.log(password, '******this is the hashed password');
            let user = new User ({first_name:req.body.first_name, last_name:req.body.last_name, email:req.body.email, password:password})
    // saving user to database
        let promise = user.save();

        promise.then((doc)=> {
            res.redirect('/success')
        })
        .catch((err)=>{
            if(err){
                res.render('index', {errors:err})
            }
            });

    }
    },

// login works!
    login: (req, res)=>{
        User.findOne({email:req.body.email.toLowerCase()}, (err, user)=>{
        // work on error handling
            if(err){
                console.log('****could not locate email in db')
                res.render('index', {errors:err})
            } else {
                if (user == null){
                    res.render('login', {error:'No matching user'})
                } else if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.render('index', {errors:'Incorrect password'})
                } else {
                    console.log(user.password)
                    req.session.id = user.id;
                    res.render('success',{user:user});
                    }   
                }
        })
    }

}