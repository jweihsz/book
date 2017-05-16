var  node_fs = require("fs");


var data_sync = node_fs.readFileSync("input.txt");
console.log(data_sync.toString());
console.log("the   test0 code is exit!\n");


function async_read_file(err,data) {

    if(err) {

        console.error(err);
        return(-1);
    }
    else {
        console.log(data.toString());
    }

    return(0);

}

node_fs.readFile("input.txt",async_read_file);
console.log("the test1 code is exit!\n");















