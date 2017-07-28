const path = require('path')
const users = require('../controllers/users')
// const tasks = require()

module.exports = (app) => {

    app.post('/login', (req, res) => {
        users.login(req, res)
    })
    app.post('showone/:id', (req, res) => {
        users.showone(req, res)
    })

    app.get('/logout', (req, res) => {
        users.logout(req, res)
    })

    app.get('/get_logged_in_user', (req, res) => {
        users.get_logged_in_user(req, res)
    })

    app.get('/get_all_users', (req, res) => {
        users.get_all_users(req, res)
    })
    app.post('/createTask', (req, res) => {
        console.log('stuck within create task in routes.js', req.body)
        users.createTask(req, res)
    })



    // app.get('/home', (req, res) => {
    //     console.log('home Route hit!')
    // })

    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}