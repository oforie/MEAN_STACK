var mongoose = require('mongoose');
var Animal = mongoose.model(
    'Animal');

module.exports = {
    show_all: function(req, res) {
        Animal.find({}, function(err, animals){
            if(err){
                console.log('******errror at index line 39****')
                res.render('index', {title:'fix this before moving on', errors:animals.errors})
            } else {
                res.render('index', {animals:animals});   
            }
        });
    },

    show_one: function (req, res){
        Animal.find({_id:(req.params.id)}, function(err, animals){
            if(err){
                res.render('selfies', {errors:animals.errors});
            } else {
                res.render('selfies', {animals:animals});  
            
            }
        })
    },

    edit_form: function(req, res){
        Animal.findOne({_id:(req.params.id)}, function(err, animals){
            console.log(req.params.id, '*****line 85****');
            if(err){
                console.log('****error on line 86');
                res.render('animal_edit', {errors:animals.errors})
            } else {
                res.render('animal_edit', {animals:animals});   
            }
        })
    },

    edit_animal: function(req, res){
        Animal.findOne({_id:(req.params.id)}, function(err, animals){
            console.log(req.params.id, "*******line 98***");
            if(err){
                res.render('selfies', {errors:animals.errors});
            } else {
                animals.name = req.body.name;
                animals.color = req.body.color;
                animals.description = req.body.description;
                animals.save();
                console.log('update saved')
                res.render('selfies', {animals:animals});  
            }
        })
    },

    create: function(req, res){
        var animal = new Animal({name:req.body.name, color:req.body.color, description:req.body.description})
        animal.save(function(err){
        if(err){
            console.log('something is not right', err);
            res.render('addform', {title:'attend to these errors', errors:animal.errors});
        } else {
            res.redirect('index');
        }
    })
    }
}