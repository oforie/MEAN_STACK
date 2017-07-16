var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// bcrypt.hashSync(password, bcrypt.genSaltSync(8));

var fs = require('fs');

var path = require('path');

mongoose.connect('mongodb://localhost/login_registration');
mongoose.Promise = global.Promise;

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js')>= 0){
        require(models_path + '/' + file);
    }
});