var mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
var Episodes = require('../lib/episodes');

var Production = function(){

  var productionSchema = new Schema({
    slug          : {type : String, index: { unique: true, required : true } },
    title         : {type : String, index: { required : true } },
    description   : String,
    status        : String,
    production_type: String,
    notes         : String,
    author        : String,
    default_height : Number,
    default_width : Number,
    price         : Number,
    released_at   : Date,
    ipad_enabled  : Boolean,
    downloadable  : Boolean,
    full_download : Boolean,
    created_at    : Date,
    updated_at    : Date,
    custom_page   : String,
    youtube_preview:String,
    episodes      : [Schema.ObjectId]
  });
  
  var _model = mongoose.model('Production', productionSchema);

  var _all = function(callback){
    console.log("hi there")
    _model.find({}, callback);
  };
  var _findBySlug = function(slug, callback){
    _model.findOne({slug : slug}, callback);
  };

  
  
  return {
    schema : productionSchema,
    model : _model,
    findBySlug : _findBySlug,
    all         :_all
  };

}();
module.exports = Production;