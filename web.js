var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var htmlfile = "index.html";
var index = fs.readFileSync("index.html");

app.get('/', function(request, response) {
 response.send(index.toString());
});

app.get("/blah", function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
