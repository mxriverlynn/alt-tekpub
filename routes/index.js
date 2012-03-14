
var Production = require('../lib/productions');
exports.index = {

  json : function(req,res){

  },

  default : function(req,res){
  	console.log("hello default action");
  	res.render("index");
  }
 
};