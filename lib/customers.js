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

  var _register = function(email, password, confirm, success, fail){
    if(password === confirm){

      bc.genSalt(10, function(err, salt) {
        bc.hash(password, salt, function(err, hash) {
          var newCustomer = new _model();
          newCustomer.email = email;
          newCustomer.crypted_password = hash;
          newCustomer.auth_token = util.randomString(32);
          newCustomer.save(function(err){
            if(err){
              fail(err)
            }else{
              success(newCustomer);
            }    
          })
        });
      });
    }else{
      fail("Passwords don't match")
    }

  }

  var _findByToken = function(token, success, fail){
    _model.findOne({auth_token:token}, function(e, doc){
      if(e){
        fail(e)
      }else{
        success(doc);
      }
    })
  }

  var _findByEmail = function(email, success, fail){
    _model.findOne({email:email}, function(e, doc){
      if(e){
        fail(e)
      }else{
        success(doc);
      }
    })
  }

  var _authenticate = function(email,password, success, fail){
    _findByEmail(email,function(result){
      bc.compare(password, result.crypted_password, function(err, authenticated) {
        if(err){
          fail(err);
        }else{
          if(authenticated){
            success(result);
          }else{
            fail();
          }
        }
      });

    }, function(){
      console.log("Can't find user with that email");
    })
  }


  return {
    schema : customerSchema,
    model : _model,
    collection : _model.collection,
    findByEmail : _findByEmail,
    findByToken : _findByToken,
    authenticate : _authenticate,
    register : _register
  }

}();


module.exports = Customer;


// var Customer = function(){

//   var DB = require('../lib/db');
//   _db = new DB("localhost", "tekpub");


//   var _authenticate = function(email,password, callback){
//     var bc = require('bcrypt');

//     this._findByEmail(email,function(result){
//       bc.compare(password, result.password, function(err, authenticated) {
//         if(err){
//           console.log(err);
//         }else{
//           if(authenticated){
//             success(result);
//           }else{
//             fail();
//           }
//         }
//       });

//     }, function(){
//       console.log("Can't find user with that email");
//     })
//   }

//   var _findByEmail = function(email, callback){
//     _db.single("customers", {email:email}, callback);
//   };

//   var _findByToken =function(token, callback){
//     _db.single("customers", {auth_token:token}, callback);
//   };

//   var _find = function(criteria, ops, callback){
//     _db.find("customers", criteria, ops, callback)
//   };

//   var _generate_password = function(customer, password, callback){
//     bc.genSalt(10, function(err, salt) {
//       bc.hash(password, salt, function(err, hash) {
//           callback(hash);
//       });
//     });
//   }

//   var _update = function(id, updates, callback){
//     _db.update("customers", id, updates, callback);
//   }

//   return {
//     findByEmail : _findByEmail,
//     findByToken : _findByToken,
//     find : _find,
//     update: _update
//   }
// }

// module.exports = new Customer();

