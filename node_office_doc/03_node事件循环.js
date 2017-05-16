
var node_event = require("events");

var evnet_emitter = new node_event.EventEmitter();


function handle_user_connected(){

    console.log("connect ok\n");
    evnet_emitter.emit("data_received");

}


function handle_data_recv() {

    console.log("data recv ok!\n");
}


/*注册事件*/ 
evnet_emitter.on("user_connected",handle_user_connected);
evnet_emitter.on("data_received",handle_data_recv);

/*触发事件*/ 
evnet_emitter.emit("user_connected");

console.log("exit the code!\n");



