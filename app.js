var express = require('express');
var bodyParser = require('body-parser');
const path = require("path");

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

var port = 8080;

app.get('/',function(req,res){
	res.render("index")
});

app.get('/our-beer',function(req,res){
	res.render("our-beer")
});

app.get('/our-story',function(req,res){
	res.render("about")
});

app.get('/contact',function(req,res){
	res.render("contact")
});

app.get('/news',function(req,res){
	res.render("news")
});

app.get('/shop',function(req,res){
	res.render("shop")
});


app.listen(port,function(req,res){
	console.log('Escuchando en el puerto: ' + port);
});

