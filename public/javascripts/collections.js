(function() {
  var Customer, Customers, Invoice, Production, Productions, Tekpub, _ref,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Tekpub = (function(_super) {

    __extends(Tekpub, _super);

    function Tekpub() {
      Tekpub.__super__.constructor.apply(this, arguments);
    }

    return Tekpub;

  })(Backbone.Model);

  Production = (function(_super) {

    __extends(Production, _super);

    function Production() {
      Production.__super__.constructor.apply(this, arguments);
    }

    return Production;

  })(Backbone.Model);

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

  this.app = (_ref = window.app) != null ? _ref : {};

  Productions = (function(_super) {

    __extends(Productions, _super);

    function Productions() {
      Productions.__super__.constructor.apply(this, arguments);
    }

    Productions.prototype.model = Productions.app.Production;

    return Productions;

  })(Backbone.Collection);

  Customers = (function(_super) {

    __extends(Customers, _super);

    function Customers() {
      Customers.__super__.constructor.apply(this, arguments);
    }

    Customers.prototype.model = Customers.app.Customer;

    Customers.prototype.url = "/api/customers";

    return Customers;

  })(Backbone.Collection);

  this.app.Production = Production;

  this.app.Tekpub = Tekpub;

  this.app.Customer = Customer;

  this.app.Invoice = Invoice;

}).call(this);
