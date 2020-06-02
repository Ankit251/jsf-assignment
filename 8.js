var http = require('http');
http.createServer(function (req, res) {
  res.write('<html><head></head><body>');
  res.write('<h1>This is header tag</h1>');
  res.write('<p>This is para tag</p>');
  res.end('</body></html>');
}).listen(8000);