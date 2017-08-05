var express = require('express');
var app = express();

app.set("port", process.env.Port ||  3000);

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + "/public"));

app.get("/" , function(req,res){
    res.render("home");
});

app.get("/about" , function(req,res){
    res.render("about");
});

app.get("/contact" , function(req,res){
    res.render("contact");
});


app.listen(app.get("port") , function(){

    console.log("server is running");

});




