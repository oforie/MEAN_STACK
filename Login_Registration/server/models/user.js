var bcrypt = require('bcrypt');
// bcrypt.hashSync(password, bcrypt.genSaltSync(8));
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type:String, required:true, minlength:2},
    last_name:{type:String, required:true, minlength:2},
    email:{type:String, required:true, unique:true, minlength:5},
    password:{type:String, required:true, minlength:8, validate:{validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    }
}, {timestamps:true});

UserSchema.pre('save', function(next) {
    
  next(new Error('pre save error'));
});


var User = mongoose.model('User', UserSchema);