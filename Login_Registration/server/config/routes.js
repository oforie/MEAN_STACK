var log_regis = require('../controller/log_regis.js');

module.exports = (app) => {
    
    app.get('/', (req, res) =>{
        res.render('index')
    });

    app.post('/registration', (req, res)=>{
        console.log(req.body, '*****this is the registration post route****');
        log_regis.register(req, res)
    })

    app.post('/login', (req, res)=>{
        console.log(req.body, '***this is the login post route****');
        log_regis.login(req, res)
    });
}