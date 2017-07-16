var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength: 2},
    color: {type:String, required: true,minlength: 2 },
    description: {type: String, required: true, minlength:5, maxlength:200}}, {timestamps:true}
);
var Animal = mongoose.model('Animal', AnimalSchema);