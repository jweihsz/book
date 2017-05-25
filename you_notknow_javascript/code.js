

function foo(){

	
	/*this绑定的是这个函数的作用区域，这里没有a，就会向全局寻找*/

	setTimeout(()=>{
	
		console.log(this.a);
	
	},100);
}


let  obj = {

	a:2
};

foo.call(obj);












































































