(function() {
  var Tekpub;

  Tekpub = (function() {

    function Tekpub(preload) {
      this.special = preload.productions.special;
      this.featured = preload.productions.featured;
      this.blurb = preload.blurb;
      this.title = preload.title;
      this.customer = preload.customer;
    }

    Tekpub.prototype.render = function() {
      this.loadTemplate("special", this.special);
      return this.loadTemplate("featured", this.featured);
    };

    Tekpub.prototype.loadTemplate = function(templateName, data) {
      var compiled;
      compiled = Handlebars.compile($("#" + templateName + "Template").html());
      return $("#" + templateName).html(compiled(data));
    };

    return Tekpub;

  })();

  window.Tekpub = Tekpub;

}).call(this);
