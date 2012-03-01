

exports.index = function(req, res){
  var Production = require("../lib/productions");
  
  Production.all(function(err,results){
    console.log("have " + results.length + " docs");
  });
  res.render('index');
}