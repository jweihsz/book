var  node_event = require("events");
var event_emitter = new node_event.EventEmitter();


function listen0_fun() {

    console.log("this is listen0\n");

} 

function listen1_fun() {

    console.log("this is listen1\n");

}

event_emitter.addListener("user_connected",listen0_fun);
event_emitter.on("user_connected",listen1_fun);

var  listener_counts = require("events").EventEmitter.listenerCount(event_emitter,"user_connected");
console.log("listen_counts==="+ listener_counts);

event_emitter.emit("user_connected");

event_emitter.removeListener("user_connected",listen1_fun);
console.log("no listerer1\n");

var  listener1_counts = require("events").EventEmitter.listenerCount(event_emitter,"user_connected");
console.log("listen_counts1==="+ listener1_counts);

console.log("the code has been over!\n");

