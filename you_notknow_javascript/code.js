


var obj0 = {
	
	
	q:2,
	
};
var obj1 = {
	
	
	f:2,
	
};

function test(obj){
	
	with(obj){
		
		q = 3;	
	}
}

test(obj0);
console.log(obj0.q); //3
test(obj1);  
console.log(obj1.q);/*undefined*/
console.log(q); /*3,q被泄露成全局变量了*/













