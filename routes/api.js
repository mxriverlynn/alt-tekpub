exports.index = function(req,res){
	var api = require("../lib/api");
	api.index.execute(function(err,result){
		if(req.cookies.auth){
      customers = require("../lib/customers");
      customers.findByToken(req.cookies.auth, function(err,doc){
        console.log(doc);
        result.customer = doc;
        res.json(result);
      });
    }else{
      res.json(result);
    }
	});
}