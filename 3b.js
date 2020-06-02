
var fs = require('fs');

fs.readFile('exercise-02.txt',function(err,data) {
	
	console.log(data.toString());
});

console.log("Program Ended")