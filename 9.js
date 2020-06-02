//use of addlistener emit method of event emitter

var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

var rit1 = (msg) => {
	console.log("message from rit1" + msg)
};

var rit2 = (msg) => {
	console.log("message from rit2" + msg)
};

eventEmitter.on("myEvent",rit1);
//Event.on("myEvent",rit1);
eventEmitter.on("myEvent",rit2);

console.log("before removing");

eventEmitter.emit('myEvent',"I am a great guy");

