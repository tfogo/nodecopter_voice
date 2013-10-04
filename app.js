#!/usr/bin/nodemon

var express = require('express'),
app = express(),
routes = require('./routes'),
arDrone = require('ar-drone'),
client  = arDrone.createClient();

var app = module.exports = express.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.listen(3000, function(){
    console.log("Server started on port %d", app.address().port);
});
