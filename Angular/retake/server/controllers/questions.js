const mongoose = require("mongoose")
const User = mongoose.model("User")
const Question = mongoose.model("Question")
const Answer = mongoose.model('Answer')


module.exports = {

    create: (req, res) =>{
        console.log ('create function hit!', req.body)
        var question = new Question({
            question: req.body.question,
            answers: req.body.answers,
            _creator:req.body._creator
        })

        question.save() 
           
        .then(() => {
            User.findOne({_id:req.body._creator}, (err, user) =>{
                if (err){
                    console.log("can't find user", err)
                } else {
                    user.questions.push(question)
                }
            })

            res.json(true)

        })
        .catch(err => {
            console.log('question was not created', err)
            res.status(500).json(err)
        })
    },

    getQuestions: (req, res) => {
        console.log('getting these questions')
        Question.findRandom({}, {}, {limit:3}, function(err, results) {
            if (err) console.log(err);
            else {
               console.log(results)
               res.json(results) 
            } 
        })
            // .then(data => {
            //         console.log('getting question objects from database', data)
            // })
            // .catch(err => {
            //         console.log(err)
               

    }

    
}