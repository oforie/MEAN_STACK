const mongoose = require("mongoose")
const Schema = mongoose.Schema


const PollSchema = mongoose.Schema({
    _creator:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    question: {type:String},
        // required: [true, "Question cannot be empty"]},

    optionOne: {type:String},
        // required: [true, "Option 1 cannot be empty"]},

    optionTwo:{type:String},
        // required: [true, "Option 2 cannot be empty"]},

    optionthree: {type:String},
        // required: [true, "Option 3 cannot be empty"]},

    optionfour: {type:String},
        // required: [true, "Option 4 cannot be empty"]}


}, { timestamps: true})

mongoose.model("Poll", PollSchema)