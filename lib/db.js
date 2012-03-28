
var DB = function(){
  var _connected = null;
  
  var Mongo = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
  
  var _dev = function(callback){
    _open("tekpub_dev", callback);
  }
  var _test = function(callback){
    _open("tekpub_test", callback);
  }
  var _live = function(callback){
    _open("tekpub", callback);
  }


  var _open = function(dbName, callback){
    var _db = new Mongo(dbName, new Server("localhost", Connection.DEFAULT_PORT, {}), {native_parser:true, safe : true});
    _db.open(function(err,db){
      _connected = db;
      callback(err,db);
    });
  }

  var _collection = function(name, callback){
    _connected.collection(name, callback);
  }


  return {
    test : _test,
    dev : _dev,
    live : _live,
    collection : _collection
  }

}();

module.exports = DB;