const mongoose = require('mongoose')
const User = mongoose.model('User')
  

module.exports = {
    login: (req, res) => {
       // findOne always returns a single object
        User.findOne({name:req.body.name})
            .then(data => {
                if(data){
                    //save to session here
                    res.json(true)
                } else {
                    let new_user = new User({name: req.body.name})
                    new_user.save()
                   
                }
            })
             .then((user) => res.json(true))
            .catch(err =>res.status(500).json(err))
    },

    index: (req, res) => {
        User.find({})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err))
        
    }
}