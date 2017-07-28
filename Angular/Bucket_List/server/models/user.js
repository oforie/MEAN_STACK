const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    name: {
        type:String, required: true, unique: true ['please enter unique name']
    },


    tasks: [{
        type: Schema.Types.ObjectId, ref: 'Task'

    }]

}, { timestamps: true})

mongoose.model("User", UserSchema)