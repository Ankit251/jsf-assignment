var fs = require('fs');
var readstream;

readstream = fs.createWriteStream("outfile.txt");

readstream.write("I am a great guy");