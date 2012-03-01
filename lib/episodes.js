var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Episode = function(){

  var episodeSchema = new Schema({
    slug        : Number, index: { unique: true, required : true },
    title       : {type : String, index: { required : true } },
    description : String,
  });

  var _model = mongoose.model('Episode', episodeSchema);
  return {
    schema : episodeSchema,
    model : _model
  }

}
module.exports = Episode;