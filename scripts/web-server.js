var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var events = require('./eventsController.js');
var rootPath = path.normalize(__dirname + '/../');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));


app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);
app.listen(5000);
console.log('listening on port 5000');