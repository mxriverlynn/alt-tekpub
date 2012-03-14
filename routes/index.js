

exports.index = function(req, res){
  // var Production = require("../lib/productions");
  
  // Production.all(function(err,results){
  //   console.log("have " + results.length + " docs");
  // });
  api = require('../lib/api.js');
  res.send(api.index);
  //res.render('./views/api/index.json.jade');
}