####2.1 调用位置
this的是在程序运行时绑定的，预先并不知道this指向谁。



####2.2 绑定规则


##### 2.2.1 默认绑定规则
```
var a = 2;

function test(){

	console.log(this.a);
}

test();

```

在非严格模式下，这段代码输出的是2，this在这里指的是全局对象，a属于全局对象的一个属性。


##### 2.2.2  隐式绑定
(1)调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。
```
function foo(){

	console.log(this.a);
}

let  obj = {
	a:2,
	foo:foo
};

obj.foo();  //2

```
在这里，this会被认为是obj。

(2)对象属性引用链中只有最顶层或者说最后一层会影响调用位置。
```
function foo(){

	console.log(this.a);
}
let obj2 = {

	a:42,
	foo:foo
};

let obj3 = {

	a:2,
	obj2:obj2
};

obj3.obj2.foo();  //42
```
可以看出，foo指向的是this最靠近其本身的对象obj2。

(3)隐式丢失
```
function foo(){

	console.log(this.a);
}

let obj = {

	a:2,
	foo:foo
};

let bar = obj.foo;
let a = "this is a test";

/*这个this是跟随的，这里调用的是bar，所以我们应该考虑bar的上下文*/
bar();  //undefined

```
从上面的示范中，我们能看到，this的上下文是跟随的，基于这条规则，我们看下：
```
function foo(){
	console.log(this.a);
}
function doFoo(fn){
	fn();
}

let obj = {
	a:2,
	foo:foo
};
let  a =  "this is a test";
doFoo(obj.foo);  /*this is a test*/

```

```
function foo(){

	console.log(this.a);
}

let obj = {

	a:2,
	foo:foo
};

let  a =  "this is a test";
setTimeout(obj.foo,1000);  /*this is a test*/

```
总结下，就是谁调用了，就考虑谁的应用场景。


####2.2.3 显示绑定
显示绑定可以通过apply()和call()来实现，这有点类似强制绑定的意思。
```
function foo(){

	console.log(this.a);

}

let  obj = {
	
	a:2

};

foo.call(obj);  //这里进行了强制的绑定,输出2

```

```
function foo(){

	console.log(this.a);
}
let  obj = {
	
	a:2
};

/*这里进行了强制绑定，所以就不会丢失this了*/
let  bar = function(){

	foo.call(obj);
};

bar();  //2
setTimeout(bar,100);  //2

```

硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接收到的所有值。
```
function foo(something){

	console.log(this.a,something);
	return(this.a + something);
}
let obj = {
	a:2
};

let bar = function(){

	return(foo.apply(obj,arguments));
};

let b = bar(3);   /*2,3*/
console.log(b); /*5*/

```

#####2.2.4  new  绑定

实际上并不存在所谓的“构造函数”，只有对于函数的构造调用。包括内置对象函数在内的所有函数都可以用new来进行调用。使用new  来调用函数，后者说发生构造函数调用时，会自动执行下面的操作：

1、创建(或者说构造)一个全新的对象
2、这个新对象会被执行[[原型]]连接
3、这个新对象会绑定到函数调用的this
4、如果函数没有返回其它对象，那么new表达式中的函数调用会自动返回这个新对象。



#####2.3 优先级

(1)默认绑定是优先级级最低的。显示绑定的优先级高于隐式绑定：
```
function foo(){

	console.log(this.a);
}

let obj1 = {

	a:2,
	foo:foo
};

let obj2 = {

	a:3,
	foo:foo
};

obj1.foo();  /*2*/
obj2.foo();  /*3*/

obj1.foo.call(obj2);  /*3*/
obj2.foo.call(obj1);  /*2*/

```


(2)new 绑定比隐式绑定优先级高
```
function foo(something){

	this.a = something;
}

let  obj1 = {
	foo:foo
};

let obj2 = {
};

obj1.foo(2);
console.log(obj1.a);  //2
obj1.foo.call(obj2,3);
console.log(obj2.a);  //3
let bar = new obj1.foo(4);
console.log(obj1.a); //2
console.log(bar.a);  //4

```


####2.4 绑定例外


#####2.4.1 被忽略的this
如何把null或者undefind作为this的绑定对象传入call或者apply，或者bind，这些值在调用的时候会被忽略，转而应用默认的绑定规则。

```
let a = 2;

function foo(){

	console.log(this.a);
}

foo.call(null);   /*2*/
```

是不是传递null就没用呢？其实不是，当使用apply和call时，如果你不在意this，只关注传递进入的参数，那么可以使用null作为占位符。看下面示范：

```
function foo(a,b){

	console.log("a:" + a+ ",b:" + b);
}


//这里只关注传参
foo.apply(null,[2,3]);

//这里使用bind显示的绑定参数
let bar  = foo.bind(null,2);

bar(3);

```

####2.5  胖箭头

胖箭头函数不使用this的四种标准规则。而是根据外层(函数或者全局)作用域来决定this。

```
let obj1 = {

	a:2
};
let obj2={
	a:3
};

function foo(){
	//这里的this取决于这个函数
	return  (a)=>{
		console.log(this.a);	
	};
}
let  bar = foo.call(obj1);  /*这里用obj1进行了绑定*/
bar.call(obj2);  //2,不是3
```

```
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


```






















