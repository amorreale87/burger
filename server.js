var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var burgers_controller = require('./controllers/burgers_controller.js'); 

var app = express();
var port = (process.env.PORT || 3000);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

burgers_controller(app);

app.listen(port);

