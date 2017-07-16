var animals = require('../controllers/animals.js');

module.exports = function(app) {
// shows all mongooses ie: db query here
    app.get('/', function(req, res) {
        animals.show_all(req, res) 
    })
        
    // post route to process adding a mongoose
    app.post('/mongooses', function(req, res) {
    console.log("POST DATA", req.body);
        animals.create(req, res)
    })


    app.get('/mongooses/new', function(req, res) {
    res.render("addform");
    })

    app.get('/selfies', function(req, res) {
    res.render("selfies");
    })

    // displaying individual animals
    app.get('/mongooses/:id', function(req, res) {
        animals.show_one(req, res)
    })

    // route for editing animal:
    app.get('/mongooses/edit/:id', function(req, res) {
        animals.edit_form(req, res)
    })

    // modifying entry: not catching the id
    app.post('/mongooses/edit/:id', function(req, res) {
        animals.edit_animal(req, res)
    })
    
}
