####1.2 ���
����ʶthis�Ĺ����У����Ƕ�this�����漸����⣺

#####1.2.1ָ������
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
������ʾ�Ĵ�����NaN��ʵ���ϣ�this.count��������һ��ȫ�ֱ�����Ϊ�������������ȷ�����У�������һЩ�ı䡣

```
foo.count = 0;
function foo(){
	for(let i=0; i<10;++i){
		if(i > 4){
			console.log(foo.count ++);   /*�����ǽ�����ʾ�ĵ���*/
		}
	}
}
foo();
```
����������ȷ�������ˡ�����һ�ַ�ʽ��ǿ��thisָ��foo:
```
foo.count = 0;
function foo(){

	for(let i=0; i<10;++i){
	
		if(i > 4){
			console.log(this.count ++);
		}
	}
}

foo.call(foo);  /*������ǿ�ư�foo�󶨵�this*/

```

#####1.2.2ָ��������
```
function foo(){

	console.log("this is a test \n");
}

function bar(){

	this.foo();   /*����this�������������ڵĺ�����ʵ���������Ӧ��ȥ��this*/
}

```
�����ʽҲ�ǲ��Եġ�















