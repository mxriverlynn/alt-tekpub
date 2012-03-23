class InvoiceItem extends Backbone.Model


class Invoice extends Backbone.Collection
  model : InvoiceItem
  url : "/api/invoice"

window.Invoice = Invoice
