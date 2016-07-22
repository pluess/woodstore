var express = require('express');
var server = express();
    
server.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("answering");
    res.status(401).end();
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});