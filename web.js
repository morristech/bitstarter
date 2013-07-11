var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var filedata =""
fs.readFile("index.html", function(err, data){
    if (err) throw err;
    var buffer = new Buffer(100);
    buffer.write(data, "utf-8");
    filedata = buffer.toString("utf-8");
});

app.get('/', function(request, response) {
  
  response.send(filedata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
