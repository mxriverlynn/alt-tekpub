var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tekpub');
var Production = require('./lib/productions')


var git = Production.findBySlug('git', function(e,doc){
    console.log(e);
    console.log("Found " + doc.title);
    
    for (var i = doc.episodez.length - 1; i >= 0; i--) {
        console.log(doc.episodes[i]);
    };

});