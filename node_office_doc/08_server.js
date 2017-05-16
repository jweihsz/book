

var http =require("http");
var url = require("url");




function fun_server_start(fun_route){

    function fun_request(request,response) {

        var path_name = url.parse(request.url).pathname;
        console.log("request for"+ path_name+ "received");


        fun_route(path_name);

        response.writeHead(200,{"Content-Type": "text/plain"});
        response.write("hello world");
        response.end();
    }

    http.createServer(fun_request).listen(8888);
    console.log("start the server");

}

exports.server_start = fun_server_start;






