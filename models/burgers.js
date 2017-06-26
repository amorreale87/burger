var orm = require('../config/orm.js'); 

var burger = {
    selectAllBurgers: function(res){
        var queryString = 'SELECT * FROM burgers'; 
        orm.selectAll(queryString, function(burger_list, data){
           res.render("index", { burgerlist: data });
        })
    },
    addBurgers: function(burger_name){
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)'; 
        orm.insertOne(queryString, burger_name)
    },
    updateBurgers: function(burger_name){
        var queryString = 'UPDATE burgers SET devoured=true WHERE burger_name=?'; 
        orm.updateOne(queryString, burger_name)
    }






}; 

module.exports = burger; 