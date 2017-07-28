const path = require('path')
// const users = require('./../controllers/users.js')

module.exports = (app) => {
 
    // app.post('/onSubmit', users.onSubmit )
    // app.get('/get_all_users', users.index)
    
    // this route must be the last route in here!
    app.get("*", (req,res,next) => {
        res.sendfile(path.resolve("./client/dist/index.html"))
    });
    
}