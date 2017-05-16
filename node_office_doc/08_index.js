

var router_user = require("./08_route");
var server_user = require("./08_server");



server_user.server_start(router_user.route);




/*浏览器中输入：http://127.0.0.1:8888/ */