var Production = function(){

  var summaryFields = {
    slug              :   1, 
    title             :   1, 
    description       :   1, 
    price             :   1, 
    status            :   1, 
    released_at       :   1, 
    youtube_preview   :   1,
    slide             :   1,
    thumb             :   1,
    link              :   1,
    preview           :   1,
    tags              :   1
  };

  var _summary = function(callback){
    db.collection("productions", function(err,productions) {
      productions.find({status:"released"},summaryFields).toArray(callback);
    });
  };

  var _all = function(callback){
    db.collection("productions", function(err,productions) {
      productions.find().toArray(callback);
    });
  };

  var _findBySlug = function(slug, callback){
    db.collection("productions", function(err,productions) {
      productions.findOne({slug:slug}, callback);
    });
  };
 
  var _findByTag = function(tag, callback){
    db.collection("productions", function(err,productions) {
      productions.find({tag:tag}).toArray(callback);
    });
  }
  return {
    findBySlug  : _findBySlug,
    all         : _all,
    summary     : _summary,
    findByTag   : _findByTag
  };

}();
module.exports = Production;