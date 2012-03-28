# mongoose = require("mongoose");
# customer = require("../lib/customers");
# assert = require("assert");


# mongoose.connect('mongodb://localhost/tekpub_test');  

# describe "customers", ->
#   currentCustomer = null;
  
#   before (done)->
#     customer.model.remove {}, ->
#       done()

#   beforeEach (done)->
#     #add some test data
#     customer.register "test@test.com", "password", "password", (doc) ->
#       currentCustomer = doc
#       done()
   
#   afterEach (done)->
#     customer.model.remove {}, ->
#       done()

#   it "registers a new customer", (done) ->
#     customer.register "test2@test.com", "password", "password", 
#       (doc)->
#         doc.email.should.equal "test2@test.com"
#         doc.crypted_password.should.not.equal "password"
#         done()
#       , (message) ->
#         message.should.equal null

#   it "retrieves by email", (done) ->
#     customer.findByEmail currentCustomer.email, (doc) ->
#       doc.email.should.equal "test@test.com"
#       done()


#   it "retrieves by token", (done)->
#     customer.findByToken currentCustomer.auth_token, (doc) ->
#       doc.email.should.equal "test@test.com"
#       done()

#   it "authenticates and returns customer with valid login", (done) ->
#     customer.authenticate currentCustomer.email, "password", (customer) ->
#       customer.email.should.equal "test@test.com"
#       done()
#     , ->
#       throw "oops"
#       done()

#   it "authenticates and returns fail with invalid login", (done) ->
#     customer.authenticate currentCustomer.email, "liar", (customer) ->
#       throw "This shouldn't happen"
#     , ->
#       done()



