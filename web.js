var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var filedata =""
fs.readFile("index.html", function(err, data){
    if (err) throw err;
    filedata = data;
});

app.get('/', function(request, response) {
  
  response.send(filedata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
