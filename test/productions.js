var Mongo = require('mongodb').Db,
  Connection = require('mongodb').Connection,
  Server = require('mongodb').Server;


var productions = require("../lib/productions");

db = new Mongo('tekpub', new Server("localhost", Connection.DEFAULT_PORT, {}), {native_parser:true});
db.open(function(err,db){

  describe("Summary productions", function(){
    
    it("returns documents", function(done) {
      productions.summary(function(err, docs) {
        docs.length.should > 0;
        done();
      });
    });

    it("returns singles with slug", function(done) {
      productions.findBySlug("mvc3", function(err, doc) {
        doc.slug.should.equal("mvc3");
        done();
      });
    });

    it("returns by tag", function(done){
      productions.findByTag("ruby", function(err,docs){
        console.log(err);
        console.log(docs);
        docs.length.should > 0;
        done();
      });
    });

  });

});