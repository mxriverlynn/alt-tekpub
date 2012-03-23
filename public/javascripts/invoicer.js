(function() {
  var Invoice, InvoiceItem,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  InvoiceItem = (function(_super) {

    __extends(InvoiceItem, _super);

    function InvoiceItem() {
      InvoiceItem.__super__.constructor.apply(this, arguments);
    }

    return InvoiceItem;

  })(Backbone.Model);

  Invoice = (function(_super) {

    __extends(Invoice, _super);

    function Invoice() {
      Invoice.__super__.constructor.apply(this, arguments);
    }

    Invoice.prototype.model = InvoiceItem;

    Invoice.prototype.url = "/api/invoice";

    return Invoice;

  })(Backbone.Collection);

  window.Invoice = Invoice;

}).call(this);
