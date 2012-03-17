
exports.index = function(req, res){
  	var preload = require("../lib/api");
    preload.index.execute(function(err,result){
      res.render("index", {preload: JSON.stringify(result)});
    });
};