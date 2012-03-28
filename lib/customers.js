var util = require('../lib/util');

var Customer = function(){

  var mongoose = require('mongoose');
  var Schema = require('mongoose').Schema;
  var bc = require('bcrypt');
  var util = require("../lib/util")

  var customerSchema = new Schema({
    id    : Number,
    email : {type : String, index: { unique: true, required : true } },
    first : String,
    last  : String,
    crypted_password :String,
    auth_token : String, 
    invoices : [{type: Schema.ObjectId, ref : 'Invoice'}]
  });

  var _model = mongoose.model('customers', customerSchema);

  var _register = function(email, password, confirm, callback){
    if(password === confirm){
      bc.genSalt(10, function(err, salt) {
        bc.hash(password, salt, function(err, hash) {
          var newCustomer = new _model();
          newCustomer.email = email;
          newCustomer.crypted_password = hash;
          newCustomer.auth_token = util.randomString(32);
          newCustomer.save(callback(err,newCustomer));
        });
      });
    }else{
      callback("Passwords don't match",null);
    }

  }
  var _findByToken = function(token, callback){
    _model.findOne({auth_token : token}, callback);
  }

  var _findByEmail = function(email, callback){
    _model.findOne({email : email}, callback)
  }

  var _authenticate = function(email, password, callback){
    _findByEmail(email,function(err, result){
      bc.compare(password, result.crypted_password, function(err, authenticated) {
        if(err){
          fail(err);
        }else{
          if(authenticated){
            callback(null,result);
          }
        }
      });

    }, function(){
      console.log("Can't find user with that email");
    });
  }

  return {
    findByEmail : _findByEmail,
    findByToken : _findByToken,
    authenticate : _authenticate,
    register : _register,
    model : _model,
  }

}();


module.exports = Customer;