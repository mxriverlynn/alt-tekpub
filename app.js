
/**
 * Module dependencies.
 */

var express = require('express')
  , Resource = require('express-resource')
  , routes = require('./routes')

var app = module.exports = express.createServer();
var mongoose = require('mongoose');


var Mongo = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;


// Configuration

app.configure(function(){
  app.use(express.cookieParser());
  app.use(express.session({ secret: "sugar snot box" }));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);

  app.use(express.static(__dirname + '/public'));
	
  
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  db = new Mongo('tekpub', new Server("localhost", Connection.DEFAULT_PORT, {}), {native_parser:true});
  //mongoose.connect('mongodb://localhost/tekpub');  
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
  //mongoose.connect('mongodb://localhost/tekpub');  
  db = new Mongo('tekpub', new Server("localhost", Connection.DEFAULT_PORT, {}), {native_parser:true});
});

// Routes
app.get("/api", require('./routes/api').index);
app.resource ("/productions", require('./routes/productions'));
app.get('/', routes.index);
app.get('/production/:slug', routes.index);

db.open(function(err,db){
  app.listen(3000);
  console.log("Connected to Mongo");
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});


