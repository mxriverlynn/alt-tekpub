//make sure to set profile=tekpub-flavor-json

var Home = function(){
  var Production = require("../lib/productions");
  
  var result = {
    title:"Welcome to Tekpub",
    description: "Concise, professional, top-quality screencasts in subjects like Microsoft.Net, Ruby, and Linux",
    featured : [],
    special : {},
    recent : [],
    queries : [
      {name: "All Productions", url : "http://tekpub.com/channels"},
      {name: "Microsoft Productions", url : "http://tekpub.com/channels/microsoft"},
      {name: "Ruby Productions", url : "http://tekpub.com/channels/ruby"},
      {name: "Javascript Productions", url : "http://tekpub.com/channels/javascript"},
    ],
    actions : {
      login : {
        url : "https://tekpub.com/sessions/new",
        method : "POST",
        required_fields : [
          {name : "email", description : "Your tekpub.com email address"},
          {name: "password", description : "Your password"}, 
        ]
      },
      register : {
        url : "https://tekpub.com/customers/new",
        method: "POST",
        required_fields : [
          {name : "email", description : "Your tekpub.com email address"},
          {name: "password", description : "Your password"}
        ]
      }
    }
  };
  var _execute = function(callback){
    Production.all(function(err,response){
      result.featured = response.filter(function(p){
        return p.slug == "mvc3" || p.slug == "ft_triage_oren" || p.slug == "ft_speaker";
      });
      
      result.special = response.filter(function(p){
        return p.slug == "ft_speaker";
      });
      callback(null,result);
    });
  };

  return {
    execute : _execute
  }
}();


exports.index = Home;
