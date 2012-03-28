mongoose = require('mongoose');
Customers = require("../lib/customers")
should = require("should")
mongoose.connect('mongodb://localhost/tekpub_test');  

describe "Customers", ->
  currentCustomer = null
  before (done) ->
    Customers.model.remove ({}) ->
      Customers.register "test@test.com", "password", "password", (err,customer)->
        console.log("registering: " + customer.auth_token)
        currentCustomer = customer
        done()


  describe "registration", ->
    it "adds a customer with valid registration", (done)->
      Customers.register "test@test.com", "password", "password", (err,customer) ->
        should.exist(customer)
        done()

    it "errs when passwords dont match", (done)->
      Customers.register "test@test.com", "password", "badness", (err,customer) ->
        should.not.exist(customer)
        should.exist(err)
        done()

  describe "fetching", ->
    it "retrieves by email", (done) ->
      Customers.findByEmail "test@test.com", (err,customer) ->
        should.exist(customer)
        done()

    it "retrieves by token", (done)->
      Customers.findByToken currentCustomer.auth_token, (err, customer) ->
        should.exist(customer)
        should.not.exist(err)
        done()