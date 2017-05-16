const os = require("os");




//获取当前系统下的结束符
function get_eol(){
	
	var target = os.EOL;
	if(2 == target.length)return("\\r\\n");  //windows
	return("\\n"); //posix
}

//console.log(get_eol());


//获取当前架构
function get_arch(){
	
	return(os.arch());
	
}

//console.log(get_arch());   //x64


//获取CPU信息
function get_cpu(){
	
	return(os.cpus());
	
}

//console.log(get_cpu());





//获取系统的大小端
function get_endianness(){
	
	return(os.endianness());
	
}


//console.log(get_endianness());   //LE



//返回系统当前的空闲内存
function get_free_mem(){
	
	return(os.freemem());	
	
}

//console.log(get_free_mem());


//获取系统总的内存
function get_totalmem(){
	
	
	return(os.totalmem());
	
}

//console.log(get_totalmem());



//返回当前用户的主目录
function get_home_dir(){
	
	
	return(os.homedir());
	
}

//console.log(get_home_dir());   //C:\Users\field

//返回主机名字
function get_host_name(){
	
	return(os.hostname());
	
	
}
//console.log(get_host_name());  //get_host_name

//获取平均负载
/*
平均负载是类unix系统下的一个概念，其定义是：在特定时间内，在进程队列中，活跃的平均进程数目：
[field@node_office]$cat /proc/loadavg
0.70 0.50 0.41 1/560 12871

前面3个数表示1分钟、5分钟、15分钟内的平均负载。1/560表示进程总数和活跃的进程数。12871表示最经活跃的进程id。
在数值的衡量上，小于0.7表示系统运行良好，等于1左右表示系统系统繁忙，大于1表示系统运行压力过大。


*/


function get_loadavg(){
	
	
	return(os.loadavg());
	
}

//console.log(get_loadavg());   //windwos系统一般是返回[0,0,0]


//获取当前系统的网络接口
function  get_network_interfaces(){
	
	return(os.networkInterfaces());
	
}

//console.log(get_network_interfaces());



//返回当前使用系统
function get_platform(){
	
	
	return(os.platform());
	
}

//console.log(get_platform());   //win32

//获取系统的类型
function get_system_type(){
	
	return(os.type());
	
	
}
//console.log(get_system_type());  //Windows_NT


//获取操作系统的版本
function get_system_release(){
	
	return(os.release());
	
}
//console.log(get_system_release());

//获取系统默认的tmp目录
function get_tmpdir(){
	
	return(os.tmpdir());
}

//console.log(get_tmpdir());   //C:\Users\field\AppData\Local\Temp


//获取系统的uptime
function get_up_time(){
	
	return(os.uptime());
	
}

//console.log(get_up_time());  //返回系统运行的总的时间

//获取用户信息
function get_user_info(){
	
//	return(os.userInfo());   //add in  node  6.0
	
}

//console.log(get_user_info());


























