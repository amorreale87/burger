var burgerApp = require('../models/burgers.js'); 

module.exports = function(app){

    app.get("/", function(req, res) {
        burgerApp.selectAllBurgers(res); 

    });
    app.post("/", function(req, res) {

        var burger_name = req.body.burger_name;
        burgerApp.addBurgers(burger_name); 
    }); 

    app.put("/", function(req, res){
        var burger_name = req.body.burger_name; 
        burgerApp.updateBurgers(burger_name); 
    }); 


} 
