####1.2 误解
在认识this的过程中，人们对this有下面几个误解：

#####1.2.1指向自身
```
foo.count = 0;
function foo(){
	for(let i=0; i<10;++i){
		if(i > 4){
			console.log(this.count ++);
		}
	}
}

foo();

/*
NaN
NaN
NaN
NaN
NaN
*/

```
这里提示的错误是NaN，实际上，this.count创建的是一个全局变量。为了让这儿函数正确的运行，可以做一些改变。

```
foo.count = 0;
function foo(){
	for(let i=0; i<10;++i){
		if(i > 4){
			console.log(foo.count ++);   /*这里是进行显示的调用*/
		}
	}
}
foo();
```
这样就能正确的运行了。还有一种方式是强制this指向foo:
```
foo.count = 0;
function foo(){

	for(let i=0; i<10;++i){
	
		if(i > 4){
			console.log(this.count ++);
		}
	}
}

foo.call(foo);  /*这里是强制把foo绑定到this*/

```

#####1.2.2指向作用域
```
function foo(){

	console.log("this is a test \n");
}

function bar(){

	this.foo();   /*想用this调用其作用域内的函数，实际上这里更应该去掉this*/
}

```
这个方式也是不对的。















