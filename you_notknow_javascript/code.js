

function foo(){

	
	/*this�󶨵������������������������û��a���ͻ���ȫ��Ѱ��*/

	setTimeout(()=>{
	
		console.log(this.a);
	
	},100);
}


let  obj = {

	a:2
};

foo.call(obj);












































































