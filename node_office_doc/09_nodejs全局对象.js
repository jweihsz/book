

/*开始计时*/
console.time("time_start");

/*获取文件名*/
console.log("the file naem  is"+__filename);

/*获取当前脚本所在目录*/
console.log("the  cur dir is"+ __dirname);


console.info("exit the test!\n");

/*结束计时*/
console.timeEnd("time_start");    /* 这里会打印所执行的时间*/

/*process全局变量*/

/*获取node版本*/
console.log("the version is: " + process.version);

/*获取node.exe的绝对路径*/
console.log("the exe path is: "+process.execPath);

/*获取命令的参数*/
var args = process.argv;
var i = 0;

for(i=0;i<args.length;++i){


    console.log("args: "+args[i]);
}



/*获取进程名*/
console.log("the name of the process is : " + process.title);

/*获取架构和平台*/
console.log(process.arch + "   "  +  process.platform);

/*获取node运行时所占用的内存  byte*/
console.log(process.memoryUsage());

/*获取node所运行的时间  s*/
console.log(process.uptime());













