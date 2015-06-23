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
server.use(methodOverride("_method"));

server.listen(3000, function(){
  console.log("Server Ready");
})
//
// //INDEX
// server.get();
//
// //CREATE
// server.post();
//
// //SHOW
// server.new();
//
// //UPDATE
// server.patch();
//
// //DELETE
// server.delete();
