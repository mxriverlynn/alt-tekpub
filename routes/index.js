
exports.index = function(req, res){
	var preload = require("../lib/api");
  preload.index.execute(function(err,result){
    if(req.cookies.auth){
      customer = require("../lib/customers");
      customer.findByToken(req.cookies.auth, function(err,customer){
        result.customer = customer;
        res.render("index", {preload: JSON.stringify(result)});
      });
    }else{
      res.render("index", {preload: JSON.stringify(result)});
    }
    
  });
};