//make sure to set profile=tekpub-flavor-json

var Api = function(){
  var Production = require("../lib/productions");
  
  var result =  {
    title:"Welcome to Tekpub",
    logoLarge : "logo_420.png",
    descriptors : [
      "Concise, professional, top-quality screencasts",
      "Microsoft.Net, Ruby, Javascript, Linux - it's all here",
      "Get up to speed on new technologies in a fraction of the time"
    ],
    splash : "splash.gif",
    description: "Concise, professional, top-quality screencasts in subjects like Microsoft.Net, Ruby, and Linux",
    blurb : {
      title : "Learn It Now - Don't Waste Your Time",
      description : "Time is money - so why pay more for a HUGE tech book that will be obsolete within months? Our videos are produced when the technology happens - not months afterwards. The only way tech publishers can release a book at our speed is to start months before we do - working with pre-release software and rushing in changes prior to production."
    },
    customer : {
      profile   : "http://tekpub.com/api/profile",
      name      : "Guest",
      email     : "",
      ownedProductions : [],
      loggedIn : false
    },
    channels : [
      {slug : "microsoft", title : "Microsoft.Net"},
      {slug : "ruby", title : "Ruby"},
      {slug : "mobile", title : "Mobile"},
      {slug : "full-throttle", title: "Full Throttle"}
    ],
    special : {
      title : "How are your speaking skills?",
      description : "Everyone needs to speak in front of a group at some point in their career. Whether it's your boss and a peer or a keynote at a huge conference: having a solid set of speaking skills can help you out. In this 80 minute production we pushed ourselves to produce the best-quality production we've ever made. We think you'll enjoy it as well.",
      quotes: [
        {testimony: "Great speaker and tremendously charismatic. His talks are informative, easy to comprehend and funny at the same time", author : "Marius Shulz"},
        {testimony: "I'm halfway through the Hanselman video from Tekpub and already have a page of notes of things I can improve. Love it!", author : "Rob Sullivan"},
        {testimony: "Just watched the 'Art of Speaking: Scott Hanselman' on Tekpub. Absolutely wonderful!", author : "Chris Schroll"},
        {testimony: "Done presentation test-run. Used some of the Hanselman techniques from Tekpub. Very effective. Only $18, guys. Recommended!", author : "Edge"},
        {testimony: "Watching my first vid on tekpub: Hanselman's talk on presenting; that talk alone seems to be worth the value of the annual description's fee.", author : "Tom Janssens"}
      ],
      image : "",
      link : "<iframe width='680' height='420' src='http://www.youtube.com/embed/4U4TzAtyYs0' frameborder='0' allowfullscreen></iframe>"
    },
    productions : [],
    actions : {
      login   :   {
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
    Production.summary(function(err,response){
      result.productions = response;     
      callback(null,result);
    });
  };

  return {
    execute : _execute
  }
}();


exports.index = Api;
