var http = require('http');
var port = 3000;

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello Node.js');
}).listen(port);

console.log('Node started on http://localhost:' + port);
