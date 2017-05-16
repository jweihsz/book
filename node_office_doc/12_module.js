/*
每个nodejs文件都会创建一个module对象：
module = {
	
	exports:{},
		
};
可以看到，module对象中还包含有属性exports。同时，文件也会创建一个exports变量，它指向module.exports.
特别要注意一点：实际导出的是：module.exports

*/



exports.a = function(){
	
	
	console.log("this is just a ");
	
}
exports.a = 1;  //这个值会覆盖前面的值,调用这个引用的最后会输出的值是1
/*
测试：
const x = require("./12_module");
console.log(x.a);
输出： 1

*/



/*当module.exports改变的时候，exports将会失效*/

exports.b = 3;
module.exports = {a:10};
exports.a = 1;

/*
测试：
const x = require("./12_module");
console.log(x.a);
console.log(x.b);
输出： 1  undefined
从这里看出，module.exports改变的时候，由exports定义的接口全部被冲刷掉

*/






/*

一种设计模式

*/


function view_test0(){
	
	console.log("view_test0");
	
}


function view_test1(){
	
	console.log("view_test1");
	
}



function view_test2(){
	
	
	console.log("view_test2");
	
}



/*这是比较好的一种设计模式*/
module.exports= {
	a:10,
	b:100,
	test0:view_test0,
	test1:view_test1,
	test2:view_test2	
};


/*导出的时候不能在回调函数数或是定时函数中导出，要直接的导出*/
setTimeout(()=>{module.exports.ff=100;},1000);
module.exports.fff=1000;

/*
测试：
console.log(x.ff);
console.log(x.fff);
结果：
undefined
1000

*/



//显示模块的名字
function get_module_name(){
	
	return(module.filename);
	
}

//console.log(get_module_name());  //F:\learn\node_office\12_module.js

//显示模块id
function get_module_id(){
	
	return(module.id);
	
}
//console.log(get_module_id());  //F:\learn\node_office\12_module.js

//检测模块是否正在加载
function module_is_loading(){
	
	return(module.loaded);
	
}

//console.log(module_is_loading()); //false


/*

当require没有明确的指定路径的时候，node会自动的从下面开始查找:
1: $HOME/.node_modules
2: $HOME/.node_libraries
3: $PREFIX/lib/node
推荐使用node_modules，这样更规范
*/































