foo();  //1
var foo;
function   foo(){   /*函数被首先提升*/
	
	console.log("1");
}
foo = function(){
	
	console.log("2");
};










