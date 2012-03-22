(function() {
  var Customer, Customers, Invoice,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Customer = (function(_super) {

    __extends(Customer, _super);

    function Customer() {
      Customer.__super__.constructor.apply(this, arguments);
    }

    return Customer;

  })(Backbone.Model);

  Invoice = (function(_super) {

    __extends(Invoice, _super);

    function Invoice() {
      Invoice.__super__.constructor.apply(this, arguments);
    }

    return Invoice;

  })(Backbone.Model);

  Customers = (function(_super) {

    __extends(Customers, _super);

    function Customers() {
      Customers.__super__.constructor.apply(this, arguments);
    }

    Customers.prototype.model = Customer;

    Customers.prototype.url = "/api/customers";

    return Customers;

  })(Backbone.Collection);

  window.Customer = Customer;

  window.Invoice = Invoice;

}).call(this);
