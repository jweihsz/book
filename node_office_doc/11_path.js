

const path = require("path");

//获取路径的最后一部分
//windows系统和unix系统有差别
function get_basename(file_path){
	
	return(path.win32.basename(file_path)); 
}

//console.log(get_basename("c:\\temp\\myfile.txt"));   //myfile.txt



//获取路径的分割符号
function get_path_delimiter(){
	
	
	return(path.delimiter);
}

//console.log(get_path_delimiter());  //;



//获取文件所在的目录
function get_dir_name(file_path) {
	
	return(path.dirname(file_path));
}

//console.log(get_dir_name("c:\\temp\\myfile.txt"));   //c:\temp


//获取文件的扩展名

function get_ext_name(file_name){
	
	
	return(path.extname(file_name));
	
}

//console.log(get_ext_name("index.txt"));  //".txt"
//console.log(get_ext_name("index."));  //"."
//console.log(get_ext_name("index")); //""
//console.log(get_ext_name(".txt"));//""


//组装路径
/*

{
	
	dir:
	root:
	
	base:
	name:
	ext:
}
其使用规则是：如果dir存在，就使用dir，否则就使用root。如果base存在，就使用base，否则使用name和ext。

*/


function path_format(path_object){
		
	return(path.format(path_object));
}

//console.log(path_format({dir:"C:\\index\\",base:"index.txt"}));
//console.log(path_format({root:"c:\\",base:"index2.txt",name:"index",ext:".txt"}));


//解析路径，path.format的逆过程
function path_parse(path_file){
	
	
	return(path.parse(path_file));
	
}

//console.log(path_parse("/index0/index1/../index3"));
/*

{ root: '/',
  dir: '/index0/ind
  base: 'index3',
  ext: '',
  name: 'index3' }

 */


//判断路径是不是绝对路径

function is_absolute(path_file){
	
	return(path.isAbsolute(path_file));
	
}


//console.log(is_absolute("index.txt"));   //false 


//连接路径

//console.log(path.join("/a","c","index.txt"));  //\a\c\index.txt


//规范化路径
/*
主要是对路径中的".." "."进行解析
*/

function path_normalize(path_file){
	
	return(path.normalize(path_file));
}

//console.log(path_normalize("/index0/index1/../index3"));



//获取相对路径
//获取to_path相对from_path的路径
function path_relative(from_path,to_path){
	
	
	return(path.relative(from_path,to_path));
	
}

//console.log(path_relative("/index/index0/index1/index4","/index/index0/index1/index2/index3")); //..\index2\index3




//提供系统的路径分割符
console.log("\\foo\\test\\hello".split(path.sep)); //[ '', 'foo', 'test', 'hello' ]














