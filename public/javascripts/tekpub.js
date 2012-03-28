TekpubView = Backbone.View.extend({
  initialize : function(){
    _.bindAll(this,"render");
  },
  render : function(data){
    var compiled = Handlebars.compile($(this.options.template).html());
    var html = "nada";
    if(this.model){
      html = compiled(this.model.toJSON());
    }else if(this.collection){
      html = compiled(this.collection.toJSON());
    }else{
      html = compiled(data);
    }
    console.log(html);
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

ProductionView = TekpubView.extend({});
ProductionMenuView = TekpubView.extend({});

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


Tekpub = function() { 

  _data = {};
  _special = {};
  _productions = {};
  _loaded = false;

  var _homeView = new HomeView({el:"#app", template : "#homeTemplate"});
  var _productionView = new ProductionView({el:"#main", template : "#viewerTemplate"});
  var _productionMenuView = new ProductionMenuView({el : "#menu", template : "#productionMenuTemplate"})
  
  var _featured = function(){
     return _data.productions.filter(function(p){
        return p.tags.indexOf("featured") > -1;
     });
  }

  var _microsoft = function(){
     return _data.productions.filter(function(p){
        return p.tags.indexOf("microsoft") > -1;
     });
  }
  var _ruby = function(){
     return _data.productions.filter(function(p){
        return p.tags.indexOf("ruby") > -1;
     });
  }
  var _mobile = function(){
     return _data.productions.filter(function(p){
        return p.tags.indexOf("mobile") > -1;
     });
  }
  var _fullThrottle = function(){
     return _data.productions.filter(function(p){
        return p.tags.indexOf("full-throttle") > -1;
     });
  }
  var _showHome = function(){
    _clear();
    var featuredProductions = _featured();
    _homeView.render({logo:data.logoLarge, splash : data.splash, descriptors: data.descriptors, special:_special, featured : featuredProductions});
  };

  var _showMenu = function(){
    $("#menu").empty();
    _productionMenuView.render({
      microsoft : _microsoft(),
      ruby : _ruby(),
      mobile : _mobile(),
      fullThrottle : _fullThrottle()
    });
  };

  var _showProduction =function (slug){
    _clear();
    _showMenu();
    
    // _selected = _productions.filter(function(p){return p.slug == slug});
    // $.get(_selected.link,function(data){
    //   model = new Production(data);
    //   console.log(model);
    //   _productionView.render();
    // });
    
  };

  var _canDownload = function(slug){
    return this.customer.owned.indexOf(slug) >=0;
  }

  var _load = function(data){
    
    _data = data;

    this.title = _data.title;
    this.description = _data.description;
    this.descriptors = _data.descriptors;
    this.customer = _data.customer;
    this.splash = _data.splash;

    _special = _data.special;
    _productions = new Productions(_data.productions);
    _loaded = true;
  }

  var _clear = function() {
    $("#app").empty();
  };

  return {
    special   : _special,
    //featured  : _featured,
    core      : _data,
    productions : _productions,
    showHome  : _showHome,
    showProduction : _showProduction,
    featured : _featured,
    load : _load,
    canDownload : _canDownload
  }

};
tekpub = Tekpub();

