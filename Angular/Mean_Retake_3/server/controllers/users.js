const mongoose = require("mongoose")
const User = mongoose.model("User")
const Poll = mongoose.model("Poll")

module.exports = {
	login: (req, res) => {
		User.findOne({name: req.body.name})
			.then(data => {
				if(data){
					req.session.user_id = data._id
					res.json(true)
				} else {
					let new_user = new User({name: req.body.name})
					new_user.save()
						.then(() => {
							req.session.user_id = new_user._id
							res.json(true)
						})
                        .catch(err => res.status(500).json(err)
                )
				}
            })
    },

    createpoll: (req, res) => {
            if (req.session.user_id){
                //information reaches this point but not further
                    let poll_add = new Poll({
                         question: req.body.question, optionone: req.body.optionone, optiontwo: req.body.optiontwo, optionthree: req.body.optionthree,
                    optionfour: req.body.optionfour});
                    poll_add._creator = req.session.user_id
                    poll_add.save()
						.then(() => {
                            console.log('poll has been saved')
							res.json(true)
						})
						.catch(err => res.status(500).json(err))
                }
    },


    onepoll: (req, res) => {
        console.log('request from user controller', req.body)
        // Poll.find({_id: req.body.id})
    },

			
	// 
	getpolls: (req, res) => {
		Poll.find()
			.then(data => res.json(data))
			.catch(err => res.status(500).json(err))
    },
        
	// get_logged_in_user: (req, res) => {
	// 	if(req.session.user_id){
	// 		User.findOne({_id: req.session.user_id})
	// 			.then(user => res.json(user))
	// 			.catch(err => res.status(500).json(err))
	// 	} else {
	// 		res.json(false)
	// 	}
	// },
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}