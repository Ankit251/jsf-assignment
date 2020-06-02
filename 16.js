//use of piping Streams

var fs = require("fs");

var reader = fs.createReadStream("input.txt");

var writer = fs.createWriteStream("outfile.txt");

reader.pipe(writer);

console.log("program ended");