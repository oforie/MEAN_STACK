const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: String,
    score: Number,
    percentage: Number
}, {timestamps: true})

mongoose.model('Player', PlayerSchema)


const QuestionSchema = mongoose.Schema({
    question: String,
    correct: String,
    fakeOne: String,
}, {timestamps: true})

mongoose.model('Question', QuestionSchema)