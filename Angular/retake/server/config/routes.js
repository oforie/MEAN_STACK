const path = require("path")
const users = require ('../controllers/users')
const questions = require ('../controllers/questions')


// const users = require("./../controllers/users.js")

module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log('login Route hit!')
        users.login(req, res)
    })

    app.post('/new_question', (req, res) => {
        console.log('new_question Route hit!')
        questions.create(req, res)
    })

    app.get('/getQuestions', (req, res) => {
        console.log('getQuestion Route hit!')
        questions.getQuestions(req, res)
    })
	
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
    })
    

}