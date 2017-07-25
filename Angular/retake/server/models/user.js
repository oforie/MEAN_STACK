const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        unique: [true, "Change your name"],
        required: [true, "Name cannot be empty"]
    },

    score: {
        type:Number,
    },

    percantage: {
        type:Number,
    },

    questions: [{
        type: Schema.Types.ObjectId, ref: 'Question'

    }]

}, { timestamps: true})

mongoose.model("User", UserSchema)