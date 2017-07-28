const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TaskSchema = mongoose.Schema({
    _creator:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    
    title: {
        type:String,
        required: [true, "task title cannot be empty"]
    },
    description: {
        type:String,
        required: [true, "description cannot be empty"]
    },

    taggeduser: [{
        type: Schema.Types.ObjectId, ref: 'User'
    }]

}, { timestamps: true})

mongoose.model("Task", TaskSchema)