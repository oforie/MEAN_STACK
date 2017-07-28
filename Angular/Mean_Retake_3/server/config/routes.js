const path = require("path")

const users = require("./../controllers/users.js")

module.exports = (app) => {
    app.post("/login", users.login)
    app.post('/createpoll', users.createpoll)
    app.get("/all_polls", users.getpolls)
     app.get("/onepoll", users.onepoll)
    
	app.get("/logout", users.logout)
	// app.get("/get_logged_in_user", users.get_logged_in_user)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}