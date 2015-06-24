var express        = require('express')
    server         = express(),
    bodyParser     = require('body-parser'),
    ejs            = require('ejs'),
    MongoClient    = require('mongodb').MongoClient,
    ObjectId       = require('mongodb').ObjectId,
    url            = 'mongodb://localhost:27017/',
    methodOverride = require ('method-override');

server.set('views', "./views");
server.set('view engine', "ejs");

server.use(bodyParser.urlencoded({extended: true}));
server.use(methodOverride('_method'));



///INDEX/HOME PAGE
server.get('/', function(req, res) {
  res.render('menu')
});

//CREATE NEW MENU ITEM
server.get('/kitchenstaff/add', function(req, res) {
  res.render('kitchen/menuAddItem')
});

server.get('/kitchenstaff', function(req, res) {
  res.render('kitchen/kitchenstaff')
});

server.get('/counterstaff', function(req, res) {
  res.render('counter/counterstaff')
});

server.get('/counterstaff/newOrder', function(req, res){
  res.render('counter/newOrder')
});

server.get('/counterstaff/newOrder/preview', function(req, res){
  res.render('counter/preview')
});

server.get('/counterstaff/openOrders', function(req, res){
  res.render('counter/openOrders')
});

//SERVER ACTIVE
server.listen(3000, function() {
  console.log("Server Ready");
})

// //SHOW
// server.new();
//
// //UPDATE
// server.patch();
//
// //DELETE
// server.delete();
