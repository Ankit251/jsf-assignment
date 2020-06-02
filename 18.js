//create buffer
var buffer = new Buffer(8);
console.log(buffer);

//write buffer
var a = buffer.write("Ankit","utf-8");
console.log(a);

buffer.toString("utf-8")
