


let obj = {

	a:2
};

/*检查对象本身和原型链*/
console.log(("a" in obj));  //true
console.log(("b" in obj)); //false

/*只检查对象本身*/
obj.hasOwnProperty("a");
obj.hasOwnProperty("b");

























































































































































