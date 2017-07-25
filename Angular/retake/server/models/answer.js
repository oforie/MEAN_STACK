const mongoose = require("mongoose")

const AnswerSchema = mongoose.Schema({
    tag: {
        type: Boolean,
        required: [true, "Answer tag cannot be empty"]
    },
    content: {
        type:String, 
        required: [true, "Answer content cannot be empty"]
    },

})
    mongoose.model("Answer", AnswerSchema)
