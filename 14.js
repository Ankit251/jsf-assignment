var fs = require('fs');
var readstream;

readstream = fs.createReadStream("exercise-02.txt");

readstream.on("data", function(data) {
	var chunk = data.toString();
	console.log(chunk);
});
console.log("Program Ended");