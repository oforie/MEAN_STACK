const mongoose = require("mongoose")
const Answers = require ('./answer')
const Schema = mongoose.Schema
const random = require('mongoose-simple-random')




const QuestionSchema = mongoose.Schema({
    _creator: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true, "Creator cannot be empty"]
    },

    question:{
        type:String,
        required: [true, "Question cannot be empty"]
    },

    answers: [Answers]
}, { timestamps: true})

QuestionSchema.plugin(random)

mongoose.model("Question", QuestionSchema)