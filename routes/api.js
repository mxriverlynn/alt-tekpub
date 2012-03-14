exports.index = function(req,res){
	console.log("Hello JSON request");
	var api = require("../lib/api");
	api.index.execute(function(err,response){
		res.send(response);
	});
}