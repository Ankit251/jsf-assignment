var http = require('http');
http.createServer(function (req,res) {
	res.writeHead(200, {'content-Type': 'text/plain'});
	res.end('The date and time are good');
}).listen(8080);