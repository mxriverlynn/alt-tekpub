var Customer = function(){

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

  var _findByToken = function(token, callback){
    db.collection("customers", function(err,customers){
      console.log("Looking for " + token)
      customers.findOne({auth_token : token}, callback);
    });
  }

  var _findByEmail = function(email, callback){
    db.collection("customers", function(err,customers){
      customers.findOne({email : email}, callback);
    });
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
    })
  }


  return {
    findByEmail : _findByEmail,
    findByToken : _findByToken,
    authenticate : _authenticate,
    register : _register
  }

}();


module.exports = Customer;