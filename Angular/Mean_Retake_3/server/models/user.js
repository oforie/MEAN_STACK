const mongoose = require("mongoose")
const Schema = mongoose.Schema


const UserSchema = mongoose.Schema({
	name: String
}, { timestamps: true})

mongoose.model("User", UserSchema)