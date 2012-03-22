class Customer extends Backbone.Model

class Invoice extends Backbone.Model

class Customers extends Backbone.Collection
  model : Customer
  url   : "/api/customers"


window.Customer = Customer
window.Invoice = Invoice
