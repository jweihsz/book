/*
nodejs中的stream有四种类型:
readable-可读操作
writeable-可写操作
duplex-可读写操作
transform-操作被写入数据，然后读取结果

stream中有4中 事件类型:
data-当有数据可读时触发
end-没有更多数据可读的时候出发
error-在接收和写入过程发生错误时触发
finish-所有数据已被写入到底层系统时触发
*/


var  node_fs = require("fs");
var data = "";

var read_stream = node_fs.createReadStream("input.txt");
read_stream.setEncoding("utf-8");

function   handle_data(chunk) {
    data +=  chunk;

}

function handle_error(err) {

    console.log(err.stack);

}


function  handle_finish() {

    console.log(data);

}

read_stream.on("data",handle_data);
read_stream.on("error",handle_error);
read_stream.on("end",handle_finish);

console.log("exit 0\n");

/*
//执行结果：
exit 0
this is a test;

 */




/*创建写入流 */
var write_data = "this";

var write_stream = node_fs.createWriteStream("out.txt");

write_stream.write(write_data,"utf-8");
write_stream.end();

function handle_write_finish(){

    console.log("write is over!\n");

}

function handle_write_error(err) {

    console.log(err.stack);
}

write_stream.on("error",handle_write_error);
write_stream.on("finish",handle_write_finish);

console.log("exit1 \n");


/*创建管道流，把一个文件的内容写入到另外一个文件*/

//read_stream.pipe(write_stream);
/*执行错误 */


/*测试链式流 */

/*压缩文件*/
var  node_zlib = require("zlib");
node_fs.createReadStream("input.txt").pipe(node_zlib.createGzip()).pipe(node_fs.createWriteStream("input.txt.gz"));

/*解压文件 */
node_fs.createReadStream("input.txt.gz").pipe(node_zlib.createGunzip()).pipe(node_fs.createWriteStream("output.txt"));





















