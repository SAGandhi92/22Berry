var express        = require('express')
    server_counter = require (),
    bodyParser     = require ('body-parser'),
    ejs            = require('ejs')
    MongoClient    = require('mongodb').MongoClient,
    ObjectId       = require('mongodb').ObjectId,
    url            = 'mongodb://localhost:27017/'
    methodOverride = require ('method-override')
    ;

server_counter.set('views', "./views");
server_counter.set('view engine', "ejs");

server_counter.use();
server_counter.use(bodyParser.urlencoded{extended: true}));
server_counter.use(methodOverride("_method"))


//INDEX
server.get();

//CREATE
server.post();

//SHOW
server.new();

//UPDATE
server.patch();

//DELETE
server.delete();
