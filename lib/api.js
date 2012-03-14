//make sure to set profile=tekpub-flavor-json
exports.index = {
  title:"Tekpub Not-so RESTful API",
  description: "La la la",
  queries : [
    {name: "All Productions", url : "http://tekpub.com/channels"},
    {name: "Microsoft Productions", url : "http://tekpub.com/channels/microsoft"},
    {name: "Ruby Productions", url : "http://tekpub.com/channels/ruby"},
    {name: "Javascript Productions", url : "http://tekpub.com/channels/javascript"},
    {name: "Featured Productions", url : "http://tekpub.com/channels/featured"},
    {name: "Recent Episodes", url : "http://tekpub.com/recent"}
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
}