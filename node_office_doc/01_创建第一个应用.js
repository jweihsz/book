
var http = require("http");

function http_server(request,response){

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("hello world\n");

}

http.createServer(http_server).listen(8888);


console.log("this is just a test!\n");








