var fs = require('fs');

fs.readFile("data.txt", function(err,data) {
	console.log("this is the data of file: " + data);
})