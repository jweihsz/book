const http = require("http");
http.createServer((req,res)=>{

    var status = req.url.substr(1);
    if(!http.STATUS_CODES[status]){

        status = "404";
    }
    res.writeHeader(status,{'Content-Type':'text/plain'});
    console.log("recv the request!");
    res.end(http.STATUS_CODES[status]);

}).listen(3000);


