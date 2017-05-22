


function foo(){

	console.log("this is a test \n");
}

function bar(){

	this.foo();   /*想用this调用其作用域内的函数，实际上这里更应该去掉this*/
}








