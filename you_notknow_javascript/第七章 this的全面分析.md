####2.1 ����λ��
this�����ڳ�������ʱ�󶨵ģ�Ԥ�Ȳ���֪��thisָ��˭��



####2.2 �󶨹���


##### 2.2.1 Ĭ�ϰ󶨹���
```
var a = 2;

function test(){

	console.log(this.a);
}

test();

```

�ڷ��ϸ�ģʽ�£���δ����������2��this������ָ����ȫ�ֶ���a����ȫ�ֶ����һ�����ԡ�


##### 2.2.2  ��ʽ��
(1)����λ���Ƿ��������Ķ��󣬻���˵�Ƿ�ĳ������ӵ�л��߰�����
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
�����this�ᱻ��Ϊ��obj��

(2)����������������ֻ��������˵���һ���Ӱ�����λ�á�
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
���Կ�����fooָ�����this����䱾��Ķ���obj2��

(3)��ʽ��ʧ
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

/*���this�Ǹ���ģ�������õ���bar����������Ӧ�ÿ���bar��������*/
bar();  //undefined

```
�������ʾ���У������ܿ�����this���������Ǹ���ģ����������������ǿ��£�
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
�ܽ��£�����˭�����ˣ��Ϳ���˭��Ӧ�ó�����


####2.2.3 ��ʾ��
��ʾ�󶨿���ͨ��apply()��call()��ʵ�֣����е�����ǿ�ư󶨵���˼��
```
function foo(){

	console.log(this.a);

}

let  obj = {
	
	a:2

};

foo.call(obj);  //���������ǿ�Ƶİ�,���2

```

```
function foo(){

	console.log(this.a);
}
let  obj = {
	
	a:2
};

/*���������ǿ�ư󶨣����ԾͲ��ᶪʧthis��*/
let  bar = function(){

	foo.call(obj);
};

bar();  //2
setTimeout(bar,100);  //2

```

Ӳ�󶨵ĵ���Ӧ�ó������Ǵ���һ�������������������еĲ��������ؽ��յ�������ֵ��
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

#####2.2.4  new  ��

ʵ���ϲ���������ν�ġ����캯������ֻ�ж��ں����Ĺ�����á��������ö��������ڵ����к�����������new�����е��á�ʹ��new  �����ú���������˵�������캯������ʱ�����Զ�ִ������Ĳ�����

1������(����˵����)һ��ȫ�µĶ���
2������¶���ᱻִ��[[ԭ��]]����
3������¶����󶨵��������õ�this
4���������û�з�������������ônew���ʽ�еĺ������û��Զ���������¶���



#####2.3 ���ȼ�

(1)Ĭ�ϰ������ȼ�����͵ġ���ʾ�󶨵����ȼ�������ʽ�󶨣�
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


(2)new �󶨱���ʽ�����ȼ���
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


####2.4 ������


#####2.4.1 �����Ե�this
��ΰ�null����undefind��Ϊthis�İ󶨶�����call����apply������bind����Щֵ�ڵ��õ�ʱ��ᱻ���ԣ�ת��Ӧ��Ĭ�ϵİ󶨹���

```
let a = 2;

function foo(){

	console.log(this.a);
}

foo.call(null);   /*2*/
```

�ǲ��Ǵ���null��û���أ���ʵ���ǣ���ʹ��apply��callʱ������㲻����this��ֻ��ע���ݽ���Ĳ�������ô����ʹ��null��Ϊռλ����������ʾ����

```
function foo(a,b){

	console.log("a:" + a+ ",b:" + b);
}


//����ֻ��ע����
foo.apply(null,[2,3]);

//����ʹ��bind��ʾ�İ󶨲���
let bar  = foo.bind(null,2);

bar(3);

```

####2.5  �ּ�ͷ

�ּ�ͷ������ʹ��this�����ֱ�׼���򡣶��Ǹ������(��������ȫ��)������������this��

```
let obj1 = {

	a:2
};
let obj2={
	a:3
};

function foo(){
	//�����thisȡ�����������
	return  (a)=>{
		console.log(this.a);	
	};
}
let  bar = foo.call(obj1);  /*������obj1�����˰�*/
bar.call(obj2);  //2,����3
```

```
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


```






















