class Tekpub 
  constructor: (preload) -> 
    @special  = preload.productions.special
    @featured = preload.productions.featured
    @blurb    = preload.blurb
    @title    = preload.title
    @customer = preload.customer
 
  render : ->
    @loadTemplate "special", @special
    @loadTemplate "featured", @featured

  loadTemplate : (templateName, data) -> 
    compiled = Handlebars.compile $("##{templateName}Template").html()
    $("##{templateName}").html compiled(data)

window.Tekpub = Tekpub