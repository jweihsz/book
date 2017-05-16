/**
 * node.js 中提供了同步或者是异步的操作接口，当然，
 * 其操作接口实际上都是对标准posix的封装。在其所有的
 * 异步封装api接口中，第1个（参数从第0开始计算）参数代表
 * 出错err，如果没有错误，则这个值是null或者是undefined。
 * 所以，在写错误回调的函数的时候，要检测这个值是否为真
 * 
 */



const node_fs = require("fs");



function fs_async(){

    //异步操作文件的方式
    node_fs.unlink("./hello",

        (err)=>{

            if(err){
                throw err;
            }
            /*注意下面，要加上转义符*/
            console.log("ok to  delete the file of \"/tmp/hello\"");
        }

    );

}

//fs_async();


//同步删除文件的方式
function fs_sync(){

    node_fs.unlinkSync("./hello");
    console.log("this is ok to delte to the file of sync!");

}

//fs_sync();




/*
在处理器比较繁忙的系统中，使用回调异步模式会更好些,如果程序的下一步操作是和回调有关的，
需要注意处理其数据的完整性
 */

//node_fs.stat的调用时依赖node_fs.rename的，所以应该放在其回调函数中
function rename_file(){

    node_fs.rename("./hello","./hello123",
    
        (err) => {

            if(err)throw (err);
            node_fs.stat("./hello123",
            
                (err,status)=>{

                    if(err)throw err;
                    console.log(`the file status is ${JSON.stringify(status)}`);
                }
            );

        }
    );

}

//rename_file();


//fs.watch用来对文件或是目录进行监控，当文件或是目录里面的文件发生改变的时候,
//会触发监控事件
function  fs_watch(argc ){

    node_fs.watch(argc,{encoding:"buffer"},
    
        (event,file_name)=>{

            if(file_name){

                console.log("the event is:"+ event + "and the file name is " + file_name);
            }


        }
    
    
    );

}


//fs_watch("./");


//测试同步或是异步读取文件
function fs_file_read(){

    //异步读取数据
    node_fs.readFile("./input.txt",
    
        (err,data)=>{

            if(err)throw err;
            console.log("异步读取数据" + data.toString());

        }
    
    );

    //同步读取数据
    var data = node_fs.readFileSync("./input.txt");
    console.log("同步读取数据"+ data.toString());

}

//fs_file_read();


//测试以异步的方式打开文件

function node_open(arg){

    console.log("open the file!\n");
    /*open的参数是:path, flags[, mode], callback */
    node_fs.open(arg,"r+",0777,
    
        (err,fd)=>{

            if(err){
                throw err;
            }
            console.log("open the file ok:" + fd);
        }
    );   
}
//node_open("./input.txt");


//获取文件信息
function file_stat(arg){

    node_fs.stat(arg,
    
        (err,stats)=>{

            if(err)throw err;
            var ret = -1;
            /*stats.isSocket() stats.isDirectory() stats.isCharacterDevice()  stats.isSymbolicLink() 
              stats.isFIFO()  stats.isSocket()
             */
            ret = stats.isDirectory();
            if(ret){
                console.log("it is a direct!");
            }

            ret = stats.isFile();
            if(ret){

                console.log("this is a file");
            }

            ret = stats.isBlockDevice();
            if(ret){
                console.log("this is  a block device");
            }
        }
    );
}

//file_stat("./input.txt");



//测试写文件

function fs_write(){

    //这种写方式会冲刷掉原来的内容
    node_fs.writeFile("./input.txt","this a test content",
    
        (err)=>{

            if(err)throw err;
            else {

                node_fs.readFile("./input.txt",

                    (err,data)=>{

                        if(err)throw err;
                        else{

                            console.log("the data is " + data.toString());

                        }  

                    }
                );

            }
        }
    
    );


}

//fs_write();

//fs.read(fd, buffer, offset, length, position, callback)
function fs_read_file(){

    var buff = new Buffer(1024);
    //打开文件
    node_fs.open("input.txt","r+",
    
        (err,fd)=>{

            if(err){throw err;}
            else {
                //如果没有发生错误，则进行读取
                node_fs.read(fd,buff,0,buff.length,0,
                
                    (err,bytes)=>{
                        
                        //bytes代表被读取的字节数
                        if(err)throw err;
                        else{

                            console.log(bytes + "字节被读取");
                            if(bytes > 0){
                                console.log(buff.slice(0,bytes).toString());
                            }

                        }

                    }
                
                );
                
                //异步关闭文件
                node_fs.close(fd,
                
                    (err)=>{

                        if(err)
                            console.log("close the file fail!\n");
                        else{

                            console.log("close the file ok!");
                        }
                    }
                
                );

            }
        }
    );
}

//fs_read_file();



function test_write_syc(file_path){

    //打开文件
    node_fs.open(file_path,"w+",0777,
    

        (err,fd)=>{

            if(err){throw err;}
            else{

                //这种方式进行写内容的时候，不会出现覆盖的现象，只是添加在文件的末尾
                //这里是同步的写内容
                var buff_data =  Buffer.from("hello,this just a test again");
                node_fs.writeSync(fd,buff_data,0,buff_data.length);
                console.log("write 0 ok!");

                //同步写内容方式2
                node_fs.writeSync(fd,"yaya   what the go");
                console.log("write 1 ok!");



                //直接写文件,不用fd的同步方式
                //这种方式会把文件里面以前的内容擦除
                node_fs.writeFileSync("./input.txt","hi i come here");
                console.log("write 2 ok!");
                //这种方式也会把文件前面的内容擦出，再重新写入内容
                node_fs.writeFileSync("./input.txt",buff_data,0,buff_data.length);
                console.log("write 3 ok!");

                //异步方式写文件
                node_fs.writeFile("./input.txt","give a  test",
                    (err)=>{

                        if(err){

                            console.log("this is a test!\n");
                        }

                    }
                );

                //异步方式写文件，方式2
                node_fs.write(fd,"123456789",

                    (err)=>{

                        if(err){

                            console.log("you can go here to test it!");
                        }
                    }
                
                );



            }
        }
    );

}


test_write_syc("./input.txt");






























