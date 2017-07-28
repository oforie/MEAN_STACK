const mongoose = require("mongoose")
const User = mongoose.model("User")
const Task = mongoose.model("Task")

module.exports = {
	login: (req, res) => {
		User.findOne({name: req.body.name})
			.then(data => {
				if(data){
					req.session.user_id = data._id
					res.json(data._id)
				} else {
					let new_user = new User({name: req.body.name})
					new_user.save()
						.then(() => {
							req.session.user_id = new_user._id
                            res.json(new_user._id)
						})
						.catch(err => res.status(500).json(err))
				}
			})
			
	},
	get_all_users: (req, res) => {
		User.find()
			.then(data => res.json(data))
			.catch(err => res.status(500).json(err))
    },
        
	get_logged_in_user: (req, res) => {
		if(req.session.user_id){
			User.findOne({_id: req.session.user_id})
				.then(user => res.json(user))
				.catch(err => res.status(500).json(err))
		} else {
			res.json(false)
		}
    },

    createTask: (req, res)=> {
		console.log('inside create task, controller', req.body)
		if(req.session.user_id) {
			let new_task = new Task ({title: req.body.title, description: req.body.description})
			new_task._creator = req.session.user_id
			new_task.taggeduser.push(req.body.taggeduser)
			new_task.save()
			.then(()=> res.json(true))
			.catch((err) => res.status(500).json(false))
			console.log(' I hope this works ')
		} else {
			res.json(false)
		}
	},
	
	showone: (req, res) => {
		// if(req.session.user_id){
		// 	User.findOne({_id: req.session.user_id})
		// 		.then(user => res.json(user))
		// 		.catch(err => res.status(500).json(err))
		// } else {
		// 	res.json(false)
		console.log('findone user route hit!')
		},
    
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}