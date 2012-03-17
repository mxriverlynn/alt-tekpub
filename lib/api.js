//make sure to set profile=tekpub-flavor-json
var featuredSlugs = ["mvc3" ,"ft_triage_oren" ,"ft_speaker"];

var Home = function(){
  var Production = require("../lib/productions");
  
  var result =  {
    title:"Welcome to Tekpub",
    description: "Concise, professional, top-quality screencasts in subjects like Microsoft.Net, Ruby, and Linux",
    blurb : {
      title : "Learn It Now - Don't Waste Your Time",
      description : "Time is money - so why pay more for a HUGE tech book that will be obsolete within months? Our videos are produced when the technology happens - not months afterwards. The only way tech publishers can release a book at our speed is to start months before we do - working with pre-release software and rushing in changes prior to production."
    },
    featured : [],
    special : {},
    recent : [],
    productions :{
      all : "http://tekpub.com/channels",
      microsoft : "http://tekpub.com/channels/microsoft",
      ruby : "http://tekpub.com/channels/ruby",
      javascript: "http://tekpub.com/channels/javascript"
    },
    actions : {
      login : {
        url : "https://tekpub.com/sessions/new",
        method : "POST",
        fields : [
          {name : "email", description : "Your tekpub.com email address"},
          {name: "password", description : "Your password"}, 
        ]
      },
      register : {
        url : "https://tekpub.com/customers/new",
        method: "POST",
        fields : [
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
      result.special = {lead : "How are your speaking skills?", production: result.special[0]};
      callback(null,result);
    });
  };

  return {
    execute : _execute
  }
}();


exports.index = Home;
