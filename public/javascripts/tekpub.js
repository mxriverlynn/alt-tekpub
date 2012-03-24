TekpubView = Backbone.View.extend({
  initialize : function(){
    _.bindAll(this,"render");
  },
  render : function(){
    var compiled = Handlebars.compile($(this.template).html());
    var html = "nada";
    if(this.model){
      html = compiled(this.model.toJSON());
    }else if(this.collection){
      html = compiled(this.collection.toJSON());
    }else{
      html = compiled(tekpub.core);
    }
    $(this.el).html(html);
  }
});

Production = Backbone.Model.extend({
  youtubePreview : function(){
    return "<iframe width='680' height='420' src='"+ this.get("preview") + " frameborder='0' allowfullscreen></iframe>";
  }
})

Productions = Backbone.Collection.extend({
  model : Production
});

ProductionView = TekpubView.extend({
  initialize : function(){
    this.template = "#viewerTemplate";
  }
});

var HomeView = TekpubView.extend({
  events : {
    "click .production-tile-view" : "navProductionViewer"
  },
  navProductionViewer : function(evt){
    evt.preventDefault();
    var slug =$(evt.currentTarget).data('slug');
    app.navigate("production/"+slug, true);
  },
})

TekpubRouter = Backbone.Router.extend({
  routes : {
    "" : "home",
    "production/:slug" : "production"
  },
  home : function() {
    tekpub.showHome();
  },
  production: function(slug){
    tekpub.showProduction(slug);
  }
});


Tekpub = function(data) { 

  var _homeView = new HomeView({el:"#app"});
  var _productionView = new ProductionView({el:"#app"});
  var _selected = data.productions.special.production;
  var _productions = data.productions.all;
  var _special = data.productions.special;
  var _featured = data.productions.featured;

  var _showHome = function(){
    _clear();
    _homeView.render();
  };
  
  var _showProduction =function (slug){
    _clear();
    _selected = _productions.filter(function(p){return p.slug == slug});
    $.get(_selected.link,function(data){
      model = new Production(data);
      console.log(model);
      _productionView.render();
    });
    
  };

  var _clear = function() {
    $("#app").empty();
  };

  return {
    special   : _special,
    featured  : _featured,
    core      : data,
    productions : _productions,
    showHome  : _showHome,
    showProduction : _showProduction,
    selectedProduction :  _selected,
  }

};

$().ready(function() {
  $.get("/api", function(data){
    tekpub = Tekpub(data);
    app = new TekpubRouter();
    Backbone.history.start({pushState:true});
  },"json");
});