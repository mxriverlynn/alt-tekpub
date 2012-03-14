
var Production = require('../lib/productions');
exports.index = {

  json : function(req,res){
  	Production.all(function(err,docs){
			res.send(docs);
  	});
  },

  default : function(req,res){
  	res.send("productionssssss")
  }
 
};
