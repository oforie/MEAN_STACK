var log_regis = require('../controller/log_regis.js');

module.exports = function(app) {
    
    app.get('/', function(req, res){
        res.render('index')
    });

    app.post('/registration', function(req, res){
        console.log(req.body, '*****this is the registration post route****');
        log_regis.register(req, res)
    })

    app.post('/login', function(req, res){
        console.log(req.body, '***this is the login post route****');
        log_regis.login(req, res)
    });
}