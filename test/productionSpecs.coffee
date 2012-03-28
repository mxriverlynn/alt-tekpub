mongoose = require('mongoose');
Productions = require("../lib/productions")
should = require("should")
mongoose.connect('mongodb://localhost/tekpub_test');  

describe "Productions", ->

  before (done)->
    console.log "removing productions"
    Productions.model.remove ({}) ->
      p = new Productions.model()
      p.slug = "slug"
      p.title = "Test"
      p.status = "released"
      p.tags = [{tag : "tag"}]
      p.episodes = [{number : 1, title : "dog"}]
      p.save (err)->
        done()

  describe "Basic fetch", ->

    it "returns all productions", (done)->
      Productions.all (err,productions) ->
        productions.length.should.be.above(0)
        done()

    it "returns summary productions", (done) ->
      Productions.summary (err,productions) ->
        should.not.exist(productions.episodes)
        done()
    
    it "returns single by slug", (done) ->
      Productions.findBySlug "slug", (err,p) ->
        should.exist(p)
        done()


    it "returns by tag", (done) ->
      Productions.findByTag "tag", (err,p) ->
        should.exist(p)
        done()    

