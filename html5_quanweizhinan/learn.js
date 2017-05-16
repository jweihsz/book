
/*jslint browser: true, devel: true */


var s =  "Hello,This is a test!\n";
var s_lower = s.toLowerCase();  //全部转化成小写
var s_uper = s.toUpperCase();//全部转换成大写
var s_length = s.length;//字符串的长度
var s0 = s[0]; //获取第一个元素
var s_end = s[s.length - 1]; //获取最后一个元素

//查找字符串出现的位置
var s_index = s.indexOf("Hello"); //0
var s_null = s.indexOf("test12"); // -1

//截取子字符串
var s_sub0 = s.substring(1, 5); //截取从1-5的字符串
var s_sub1 = s.substring(8); //截取从8开始的字符串

//alert(s_sub0 + "&" + s_sub1);
//alert("the length is"+s.length+s[0]+s[1]+s[s.length-1]+s[s.length]);


/*数组*/


var arr = [1, 3, "hello", "test" ];
//arr.length=5;
arr[10] = "x"; //增加数组元素的长度
//arr.length=11;
arr.length = 3;   //删除数组中的其它元素，只保持前面两个
arr.length = 10;  //增加数组元素的长度
arr[0] = "100";  //修改元素的值


var index0 = arr.indexOf("hello");  //查找"hello"出现的位置  2
var sub0_arr = arr.slice(0, 3); //截取从下表0开始的3个元素
var sub1_arr = arr.slice(3); //截取从下标3开始的所有元素
var copy_arr = arr.slice(); //这里是对所有元素进行复制

//push 和 pop
arr.push("1", 1001);  //向数组末尾跳添加元素，可以认为把'1' 和 1001 这一整块放置到尾部就行，所以1001在最后面
var pop_value = arr.pop();  //返回的值是1001


//unshift 和 shift
arr.unshift('A', 'B');   //向数组的头部添加两个元素 可以认为把'A' 'B'这一整块放到头部就行，所以A会在前面
var shift_value = arr.shift(); //从头部弹出一个元素，这里是'A'

//排序，默认是从小到大
arr.sort();

//反转
arr.reverse();

//从某个位置开始删除几个元素，然后从该位置再添加几个元素
arr.splice(arr.length - 1, 1, "what"); //从最后一个元素开始删除一个元素，然后从该位置开始添加一个元素"what"

arr.splice(0, 8); //从索引0开始删除8个元素，这里是只进行删除，没有进行元素的添加

//连接元素,返回一个新的数组
var new_concat = arr.concat([1, 2, "345"]);  //连接返回一个新的数组，原来的数组不变

//把数组中的各个字符连接起来，然后返回新的字符串
var  new_join = arr.join("to");  //这里是用to连接数组中的所有字符串



//对象
var xiaoming = {
    name: "xiaoming",
    age : 12,
    school: "NO.1 Middle school",
    height: 1.70,
    socre: null


};


var xiaoming_age = xiaoming.age;
var xiaoming_name = xiaoming.name;

delete xiaoming.age;  //删除,在对象中就不会在出现

//alert(xiaoming_name + ":" + xiaoming_age + xiaoming.age);  //xiaoming:13 undeined,xiaoming.age已经在上面删除了

//检测其本省是否具有某个元素，把包括继承
if (xiaoming.hasOwnProperty("school")) { //true
  
    var test_null =  null;


}

//因为in不能使用，尝试使用下面方式
if (xiaoming.school !== undefined) {     //true
     
    test_null =  null;

}

if (xiaoming.toString !== undefined) {  //true

    test_null = null;

}


//JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true，因此上述代码条件判断的结果是true



//for...in 循环可以把一个对象中的所有成员全部循环出来
var for_cycle = {
    
    name: "jack",
    age: 12,
    city: "Hello"
};

var key;
for (key in for_cycle) {
    if (for_cycle.hasOwnProperty(key)) {   //过滤继承属性
    //     alert(for_cycle[key]);   //用for_cycle.key无法运行 

        
    }
   
}


var for_buffer = ['A',123, 'B', "YOU"];
for (var i in for_buffer) {
    
 //   alert(for_buffer[i]);     //注意这里得到的是string，非Number
    
}


//map 和 set

var m = new Map([["hello0",1], ["hello2", 2], ["hello3, 3"]]); //这里是用二维数组来进行初始化
m.set("hello4", 4);  //添加元素
if (m.has("hello0")) { //检查是否有该元素
    
 //   alert(m.get("hello0"));
    m.delete("hello0");
//   alert(m.get("hello0"));
    
}

//var s = new Set();
//alert("你的浏览器支持map和set!");


//用for of 循环来进行遍历
//支持for of类型的有Array 、Map、Set
//var a = [1,3,4];
//for (var x of a) {


//}


//var a_of = ['A','B','C'];
//var b_of = new Set(['A','B','C']);
//var v_of = new Map([1,'A'],[2,'B'],[3,'C']);


//有名函数
function abs(x) {
    
    if(typeof x != "number") {
        alert("type is wrong !");
        return(NaN);
    
    }
	if(x >= 0) return(x);
	else
		return(-x);
}

//无名函数

var test_abs = function(x) {

    if(typeof x != "number" ) {
        alert("type is wrong !\n");
        return(NaN);
    } 

	if(x >= 0) return(x);
	else
		return(-x);


};



//alert("绝对值是:"+abs(-10)+" " + test_abs(-100));



//函数内部的关键字参数arguments

function foo(x){
    
    if(typeof x != "number"){
    
        alert("the type is wrong!");
        return(-1);
    }
    
    //arguments参数只在函数内部有用，它相当于array
    for(var i=0; i < arguments.length; ++i){
        alert(arguments[i]);
    }
    
    if(x >= 0){
        return(x);
    }
    else {
    
        return(-x);
    }
    
}

//alert(foo(-1001));


//用arguments接收可变参数
function foo2(x) {
    
    var tmp_array = [];
    for(var i=2; i<arguments.length; ++i) { 
        
        tmp_array.push(arguments[i]);
    }
    
 //   console.log("array====="+tmp_array);



}


//foo2(1,3,4,56);


//javaScript的函数定义有个特点，它会先扫面整个函数体的语句，把所有申明的变量“提升”到函数顶部：
function foo3() {
    var x = "hello" + y; //这里只会把y声明的权限进行提升，不会提升其赋值
    alert(x);
    var y = "jweih";   //y是在这里进行定义的
}

//foo3(10);   // 显示jweih undefined




//全局作用域相当于全局变量window的一个成员
var global_value1 = null;
function foo4(x,y)
{
    if(2 === arguments.length) {
    
      global_value1 = x + y;  
    
    }
    
    return(global_value1);

}


//alert("the global value is " + foo4(100,100) + "equal"+window.global_value1);




var xiaoming = {
    
  name:"xiaoming",
  birth:1990,
  age: function() {
      
      var myDate = new Date();
      return (myDate.getFullYear()- this.birth);
  }
    
};

//alert("the data is "+xiaoming.age());

//把函数进行独立
function get_age() {
    
    var cur_date = new Date();
    var cur_year = cur_date.getFullYear() - this.birth;
    return(cur_year);
}

var xiaoming2 = {
    
    name: "xming",
    birth:1990,
    age: get_age
    
};

//alert("the new data is " + xiaoming2.age());


//高阶函数：一个函数接收另外一个函数作为参数，这样的函数叫做高阶函数

function super_add(x,y,f) {
    
    return (f(x) + f(y));

}

//alert("hi"+super_add(-5,-6,Math.abs));


//数组的map函数，让数组的中每个元素都调用map传入的函数，得到一个新的数组
function pow(x) {
    
    return(x * x);
    
}

var arr = [1,2,3,4,5,6,7,8];
//alert("the new array is " + arr.map(pow)); //1,4,9,16,25,36,49,64


//数组的reduce函数，把各个元素进行累积作用

var arr_reduce = [1,3,5,7,9];

var ret_reduce = arr_reduce.reduce(function (x,y){
    
    return(x+y);
    
});

//alert("the reduce value is " + ret_reduce);



//数组的filter用来把数组中的某些元素进行过滤，传入一个函数，每个元素会运行该函数，返回true则保留，返回false则去掉

var arr_fifter = [1,2,3,4,5,6,7,8,9,10];
var ret_fifter = arr_fifter.filter(function(x) { //保留奇数
    return(x % 2 !== 0);

});

//alert("the fifter value is" + ret_fifter);


//sort 排序,默认的排序是先转换为字符串，然后再按照ASCII大小进行排序的

var arr_sort = ["hello","apple","abc"];
var ret_sort = arr_sort.sort();
//alert("the new arr is "+arr_sort+"the old arr is"+ret_sort); //new arr 和old arr是相等的,排序的时候会对原来的数组直接进行排序

//调用用户自定义的函数进行排序
var arr_sort1 = [1,34,5,67];
//下面是从小到大进行排序
var ret_sort1 = arr_sort1.sort(function(x,y) {
    if(x < y)return(-1);
    else if(x > y)return(1);
    
    /*
    //下面是从大到小进行排序
    if(x < y)return(1);
    else if(x > y)return(-1);
    
    */
    
    return(0);

});

//alert("the value is "+ ret_sort1);

//闭包,调用一个函数，返回的是另外一个函数，但是这个返回的函数保存了相关的变量和参数
function close_packet(arr) {
    var sum = function() {
    
        return(arr.reduce(function(x,y) {
            return(x + y);
        
        }));
    
    }
    
    return(sum);
}


var f_close_packet = close_packet([1,2,3,45,6]);  //这里返回保存了相关参数和变量的函数
var f_close_packet0 = close_packet([1,2,3,45,6]);

//alert("the packer value is"+f_close_packet()); //实际调用的时候才会返回结果

//alert(f_close_packet0===f_close_packet); //每次调用都会返回新的函数，即使调用的参数相同


//创建一个匿名函数并立刻执行
//注意这里有两个括号
var fast_fun = (function(x) {
    
    return(x*x);
})(3);

//alert("the fast value is "+ fast_fun);


//关于对象需要遵守的几条原则
/*
//不要使用new Number() new Boolean() new String()创建包装对象
//用parseInt() 或parseFloat()来转换任何类型到number
//用String()来转换任意类型到string,或者直接调用某个对象的toString()
//通常不必把类型转换成boolean再进行判断,可以直接使用if(myvar)
//typedef 操作符可以判断出number、boolean、string、function和undefined
//判断array要使用Array.isArray()
//判断null要使用myvar === null
//判断某个全局变量是否存在使用typedef window.myVar === "undefined"
//判断某个内部对象是否存在使用typedef muvar === "undefined"
//null 和 undefined对象没有toString()
//数字转字符串使用类似:(123).toString()


*/


//date

var now = new Date();
var date_year = now.getFullYear();  //获取年份 4位数
var date_month = now.getMonth();    //获取月份(0-11)
var date_date = now.getDate();      //获取几号
var date_day = now.getDay();        //获取星期
var date_hour = now.getHours();     //小时
var date_min = now.getMinutes();    //分钟
var date_sec = now.getSeconds();    //秒
var date_misec = now.getMilliseconds(); //毫秒
var date_time = now.getTime(); //1970/1/1零时
//alert(now);



//正则表达式
/*
创建正则表达式的方式是：
(1)/正则表达式/
(2)new RegExp("正则表达式")

*/
var re = /^\d{3}\-\d{3,8}$/;
var re_boolen = re.test("010-12345"); //true

//alert("the value is" + re_boolen);


//json
var json_xiaoming = {
    name : "小明",
    age : 14,
    gender : true,
    height : 1.65,
    skills : ["javaScript", "C","C++"]
};

//序列化成json字符串
var json_out0 = JSON.stringify(json_xiaoming,null,' ');
//alert(json_out0);

//反序列化,实际上就是去掉键值得字符串
//JSON.parse("[1,2,3,true]");
var parse_out = JSON.parse('{"name" : "小明","age" : 14}'); //这里似乎只能用单引号
//alert("parse out is" + parse_out);


//面对对象编程
//在javaScript中，面对对象编程主要是通过原形来实现的(__proto__)
var student_proto = {
    name : "robot",
    age : 102,
    run : function() {
        
        alert("enter the fun of fun!");
    
    }

};


var xiaoming_proto = { 
    name : "xiaohong"

};

xiaoming_proto.__proto__ = student_proto;

//alert(xiaoming_proto.age);
//xiaoming_proto.run();


//通过Object.create()来创建对象
function create_student(name,age) {

    var s = Object.create(student_proto);  //通过一个原有的对象来创建新的对象
    s.name = name;
    s.age = age;
    
    return(s);
}

var xiaoming_create = create_student("xiaokun",12);
//xiaoming_create.run();
//alert(xiaoming_create.age);




//用构造函数创建对象
function  student_gouzao(name)  {
    this.name = name;
    this.run = function() {
        
        alert("hello,i enter the gouzao hanshu !");
    
    };
}


//注意创建构造函数的时候不要忘记了这个new符号
var xiaoming_gouzao =new  student_gouzao("xiahong");
//ert("age=="+xiaoming_gouzao.age + "name===" + xiaoming_gouzao.name);
//ert(xiaoming_gouzao.run());


//浏览器对象
/*
javaScript可以获取浏览器提供的很多对象，并对其进行操作,这句话的意思其实就是说浏览器本身提供了一些库接口，用户可以使用这些库接口

*/

//全局对象
var window_inner_height = window.innerHeight;   //除去菜单栏等窗口内部的高度
var window_inner_width  = window.innerWidth; //除去菜单栏窗口内部的宽度
var window_out_height = window.outerHeight; //包括菜单栏的高度
var window_out_width = window.outerWidth; //包括菜单栏的宽度

//alert(window_inner_height + "+" + window_inner_width + "+" + window_out_height + "+" + window_out_width);


//获取浏览器本身的一些信息,不过这些信息不是很可靠，用户要慎用它们来作为判断的依据
var explore_name = navigator.appName;  //浏览器名字
var explore_version = navigator.appVersion; //浏览器版本
var explore_langue = navigator.language; //浏览器目前所使用的语言
var explore_os = navigator.platform; //操作系统类型
var explore_useragent = navigator.userAgent;  //xx字符串

//alert(explore_name + "+" + explore_version + "+" + explore_langue + "+"+explore_name);

//获取屏幕的一些特性
//alert(screen.width + "+" + screen.height + "+" + screen.colorDepth);

//获取当前页面的URL

var url_addres = location.href; //获取当前页面的网络地址

//location.protocol; // 'http'
//location.host; // 'www.example.com'
//location.port; // '8080'
//location.pathname; // '/path/index.html'
//location.search; // '?a=1&b=2'
//location.hash; // 'TOP'

//加载一个新页面
//location.assign("http://www.w3school.com.cn/jsref/dom_obj_navigator.asp");

//重新加载一个页面
//location.reload(location.href);   //这里是重新加载自身


//document表示当前页面
//alert(document.title); //获取当前页面的标题
//注意这两个函数接口
//getElementById()  //通过ID来获取节点
//getElementsByTagName() //通过名字来获取节点



/*
操作DOM，方式主要有下面几种：
(1)更新:更新该DOM节点的内容
(2)遍历：遍历所有节点，以便进一步的进行操作
(3)添加：在DOM下新增一个子节点
(4)删除：删除一个节点会连带其子节点一起删除
*/

//var dom_value = document.getElementById('test_dom').getElementsByTagName('p');
//alert(dom_value);


//c插入节点 这部分测试没有通过
//var insert_list = document.getElementById('list');
//var new_node = document.createElement('p');
//new_node.innerText = 'world';
//new_node.id = 'what';
//insert_list.appendChild(new_node);


//函数声明的提升



//函数的声明在调用它的代码之后
//alert("test the sum valus is " + fun_test_pro(1,2,4,5));

function fun_test_pro(agr0,arg1) {

    var x = 12.0;
    var i = 0;
    var sum = x;
    for(i=0;i<arguments.length; ++i) {
    
        sum += arguments[i];
    }
    
    return(sum);
}




//javascript 中决定变量或是对象消亡的计算方式是引用计数的方式，当引用计数方式为0的时候，则代表消亡，看下面的示范：


var test_go_out = function () {
    
    return("this is a test for the time to go out");
}


var test_out = test_go_out;  //到这一步，引用计数是2

test_go_out = null;  //到这一步，引用计数是1

//alert(test_out());  //所以在这里还是能显示的



//递归函数

function fun_digui(num) {
    if(num <= 1) {
    
        return(1);
    
    }
    else {
    
        return(num*fun_digui(num-1));
    }
}

var fun_test_digui0 = fun_digui;
//alert("test the fun of digui: "+fun_test_digui0(6));   //这行代码是正确的
fun_digui = null; 
//alert("test the fun of digui: "+fun_test_digui0(6));  //这行代码是无法显示的，因为在递归函数中还是调用到fun_digui，而该函数已经变成null了，要使用argument.callee()来代替


//测试闭包
function bibao(arg0) {

    var ret_fun = function() {
    
        return(arg0);
    }
    
    
    return(ret_fun);
}


var bibao_test0 = bibao(10);

//alert("the bibao test is: " + bibao_test0());  //10

var var_packet = 10;

var bibao_test1 = bibao(var_packet);

var_packet = 100;

var bibao_test2 = bibao(var_packet);

//alert("value0=="+bibao_test1()+"value1===" + bibao_test2()); // 10  100


function bibao2() {

    var result = new Array();
    var i = 0;
    for(i=0;i<10; ++i) {
    
        result[i] = function() {
        
            return(i);
        };
    
    }
    
    return (result);

}

var bibao_test3 = bibao2();
//注意下面这个结果，在闭包中只会获取变量的最后一个值
//alert("the value is :" + (bibao_test3[0])() + " " +(bibao_test3[1])());  //10 10

//针对上面的问题，可以通过创建即时匿名函数来进行解决


function bibao3() {

    var result = new Array();
    var i = 0;
    for(i=0;i<10; ++i) {
    
        result[i] = (function(num) {
            
            return(function() {
                return(num);
            
            });
        })(i);
    
    }
    
    return (result);

}

var bibao_test4 = bibao3();
//alert("the value is :" + (bibao_test4[0])() + " " +(bibao_test4[1])());  //0 1


//测试this对象
var this_name0 = "hello";

var object_this0 = {

    this_name0 : "world",
    get_fun: function() {
    
        var fun = function() {
        
            return(this.this_name0);
        
        };
        return(fun);
    
    }

};

//下面打印的是全局变量，因为内部函数只能搜索到外部函数的活动对象，而this 和 arguments不属于活动对象
//alert(object_this0.get_fun()());  //hello

var object_this1 = {

    this_name0 : "world",
    get_fun: function() {
        
        var that = this;   //这里进行保存
        var fun = function() {
        
            return(that.this_name0);
        
        };
        return(fun);
    
    }

};

//alert(object_this1.get_fun()());  //这里显示的是world  


//块级作用域

function kuai0_fun(num) {
    
    var sum  = 0;
    for(var i=0;i<num;++i) {
        
        sum += i;
        
    }
    var i ;
    alert("i===" + i); //i的作用域在这里仍然有效果
    
}

//kuai0_fun(10);  //这里依然显示10

//用匿名函数模仿块级作用域
function kuai1_fun(num) {
    
    
    var sum = 0;
    //创建匿名函数并立刻进行调用
    (function() {
        
        for(var j=0;j<num;++j) {

            sum += j;
        }     
           
    })();
    alert("can you cong into the valu");
    alert("va=="+j);
}

//kuai1_fun(2);





//构造函数来构建私有变量
//下面这个函数测试没有通过
function priv_fun0() {

    var  priv = 10;
    function priv_get() {
    
        return(false);
    }
    
    //增加特权方法
    this.public_methon = function() {
    
        priv += 1;
        return(priv_get());
    
    };
}


//alert("the test_priv0===" + priv_fun0.public_methon());


//静态私有变量

(function() {

    //私有变量
    var priv_val0 = 1090;
    function fun() {
    
        
        alert("i will back a false value");
        return(false);
    
    }
    
    Myobject = function() {
    
    
    };
    
    //Myobject并没有用var来声明，这里被默认成全局变量了
    Myobject.prototype.public_fun = function() {
    
       priv_val0 ++;
        return(fun());
    
    
    }


})();


//对于对象，这里进行了new操作
var  test_priv_value = new Myobject;

//test_priv_value.public_fun(); 



//模块模式
var signel_fun = function() {

    var val = 109;
    function priv_fun() {
    
        return(false);
    }
    
    return{
    
        public_property: true,
        public_method: function() {
        
          val += 1;
          return(priv_fun());
        
        }
    
    
    };

}();

//alert(signel_fun.public_method()+ " " + signel_fun.public_property);



//访问未定义的全局变量

//下面这种方式是错误的
//var new_value = oldvalue;
//alert(new_value);

//这种方式是可以的
var new_value0 = window.oldvalue;
//alert(new_value0);



//窗口位置

//下面两行代码是测试界面里窗口上左边和顶部的距离
var left_pos = (typeof window.screenLeft == "number") ? (window.screenLeft) : (window.screenX);
var top_pos = (typeof window.screenTop == "number") ? (window.screenTop) : (window.screenY);

//alert("the value of left_pos" + left_pos + "  the value of top_pos is " +  top_pos);


//下面四行代码没有执行通过
//self.moveTo(0,0);
//self.moveBy(100,100);
//window.resizeTo(100,100);
//window.resizeBy(100,100);

//这里打开的是一个弹出窗口，被浏览器拦截了
//var new_window0 = window.open("http://www.baidu.com/","wroxWindow","height=400,width=400,top=10,left=10,resizable=yes");
//if(null == new_window0) {
 //   alert("the window was been blocked!");  //弹出窗口被阻止了

//}

//下面两行代码产生了作用
//new_window0.resizeTo(1000,1000);
//new_window0.moveTo(100,100);
//这行代码没有起作用
//new_window0.close();


//这行代码没有不能执行
//setTimeout(" alert("hello") ",1);
//这行代码能执行

var timeout_id = setTimeout(function() {

    alert("this ia test");

},1000);

clearTimeout(timeout_id);  //这个函数用来取消定时器


//间歇调用
var timeout_num0 = 0;
var timeout_max = 10;
var interval_id = null;

//第一种方式
function increment_timeout() {

   timeout_num0 += 1;
    if(timeout_num0 == timeout_max) {
    
        clearInterval(interval_id);
        alert("done");
    }

}
//interval_id = setInterval(increment_timeout,1000);


//第二种方式
//使用超时的方式实现时间间隔
function increment_timeout0() {

     timeout_num0 += 1;
     if(timeout_num0 < timeout_max) {
     
        setTimeout(increment_timeout0,500);
     
     }
     else {
     
        alert("done");
     
     
     }

}

 //setTimeout(increment_timeout0,500);

/*
//系统对话框
if (confirm("Are you sure!")) {

    alert("I'm so glas you are sure!");
}

else {

    alert("I'm sorry to gear you are not sure");
}

var result_prompt = prompt("What is your name? ","");
if(null !== result_prompt) {

    alert("Welcom, " + result_prompt);
}

*/




//查询字符串参数
function get_query_strings() {

    var qs = (location.search.length > 0) ? (location.search.substring(1)) : "";
    var args = {};
    var items = qs.length ? qs.split("&") : [];    //这里是进行切割
    var item = null;
    var name = null;
    var value = null;
    var i = 0;
    var len = items.length;
    
    for(i=0; i<lem; ++i) {
    
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        
        if(name.length) {
        
            args[name] = value;
        }
    
    
    }
    
    return (args);


}


//位置操作 下面的三个操作是等价的
//location.assign("http://www.baidu.com");
//window.location = "http://www.baidu.com";
//location.href = "http://www.baidu.com";


//history对象
//history.go(-1);   //后退一页
//history.go(1); //前进一页
//history.go(2); //前进两页
//history.back(); //后退一页
//history.forward(); //前进一页
//history.length;  //记录的长度





//DOM节点转换成数组

function dom_conver_toArray(nodes) {
    
    var array = null;
    try {
    
        array =  Array.prototype.slice.call(nodes,0);  //这里针对的是非IE浏览器
    
    }catch(ex) {  //下面是针对IE浏览器
    
        array = new Array();
        var i = 0;;
        for(i=0;i<nodes.length; ++i) {
            array.push(nodes[i]);
        
        }
    
    }
    
    return(array);


}

/*
//操作节点的方式
//增加新的节点
var return_node = some_node.appendChild(new_node); //插入一个节点
alert(return_node == new_node); //true  返回的节点就是新增的节点
alert(some_node.lastChild == new_node) ; //true 添加到末尾

//如果appendChild节点是节点链中原来的一部分，那么appendChild操作之后，将会从原来节点地方移动到新节点的地方。
var return_node0 = some_node.appendChild(some_node.firstChild);
alert(return_node0 == some_node.firstChild);   //false
alert(return_node0 == some_node.lastChild);   //true



//插入节点，把节点插入到childNodes中某个特定的位置上
insertBefore(要插入的节点,作为参考的节点);
//插入的节点的实际位置是位于参考节点的前面，如果参考节点是null，那么等价于appendChild操作。


//插入并替换节点
replaceChild(new_node,old_node);
//插入的节点会把其所有的节点关系复制过来，被替换的节点从技术的较多看，其仍然存在于文档中，当时在文档中已经没有自己的位置了。

//单纯的移除节点
removeChild(node);
从技术上看，移除的节点已然存在于文档中，但是没有其位置了。


//上面所有的操作，都是依赖父节点来进行操作的，如果没有父节点，调用上面的API是会出错的。所有正确的调用方式是先通过parentNode获取父节点的属性，如果不存在，那上面的API也就无法调用了。





*/



//文档的document
var   document_html = document.documentElement;  //获取对html的引用
//下面3个实际返回的是false，与书本上的相反
//与书本上相反的原因，因为html中第一个元素<!DOCTYPE html>被当作第1个子节点了。

//alert(document_html === document.childNodes[0]);  
//alert(document_html === document.firstChild);
//alert(document_html === document.childNodes.item(0));

//获取body属性
//document的另外一个属性是直接获取body属性，看下面的代码：
//var body = document.body;   //直接指向<body>




//测试改变文档的标题
var document_title0 = document.title;
document.title = "just test the fun of tile";
setTimeout(function() {

    document.title = document_title0;

},1000);



//测试和网页请求有关的属性
var document_url = document.URL;   //完整url
var document_domain = document.domain;  //域名
var document_referrer =  document.referrer; //链接

//alert(document_url + "   " + document_domain + "    " + document_referrer);


//查找元素
//查找元素有两个API

//严格区分大小写
var  find_list = document.getElementById("list"); //通过id查找，如果没找到返回null
if(null == find_list) {
    
}

var find_tag0 = document.getElementsByTagName("test_tag"); //这里是通过tag来进行查找
var find_tag_all = document.getElementsByTagName("*"); //这里表示获取文档中的所有元素
if(null == find_tag_all) {
    
//    alert("find nothing!");
    
}
else {
    
//    alert(find_tag_all.item(0));
    
}

//对于htmldocument类型来说，还有一个方法：根据名字来获取元素，看下面示范:
var find_radios = document.getElementsByName("color");  //查找名字为color的所有元素



//element元素
var element_test0 = document.getElementById("java");
if(null != element_test0) {
    
 //   alert(element_test0.tagName);
//    alert(element_test0.tagName==element_test0.nodeName);

}

//这里之所以要转换成小写是因为在HTML中，标签始终返回大写，而xml中会如实返回，这点要注意
if(element_test0.tagName.toLowerCase() == "p") {  

  //  alert("the tag is p");

}

var  java_attribut = element_test0.getAttribute("test_attribute");
if(null != java_attribut) {

 //   alert(java_attribut);   //what

}

//alert("the what value is" + element_test0.firstChild.nodeValue);  //Java   这里获取的是文本内容


//设置属性

var new_attrubute = element_test0.setAttribute("test_attribute","go");
java_attribut = element_test0.getAttribute("test_attribute");
if(null != java_attribut) {

//    alert(java_attribut);   //go

}

var attribute_test2 = element_test0.attributes.getNamedItem("test_attribute").nodeValue; //获取值
//alert("the value maybe is " + attribute_test2);  //go
element_test0.attributes.getNamedItem("test_attribute").nodeValue = "this is just a test for it";  //重新设置值
attribute_test2 = element_test0.attributes.getNamedItem("test_attribute").nodeValue;
//alert("the value maybe is " + attribute_test2);


//创建元素
var create_element0 =  document.createElement("input");   //创建元素
//增加新的属性
create_element0.id = "create_test0";
create_element0.type = "radio";  //这是一个单选按钮
create_element0.name = "choice";
create_element0.value = 1;
create_element0.setAttribute("imag","hello.jpg"); 
//把它们添加到设备树中
document.body.appendChild(create_element0);


var create_element1 =  document.createElement("button");   
//增加新的属性
create_element1.id = "create_test1";
create_element1.type = "reset";  //这是一个按钮
//把它们添加到设备树中
document.body.appendChild(create_element1);




//创建文本节点
var text_element = document.createElement("text_test");
text_element.className = "message";

var text_node= document.createTextNode("Don not do it"); //创建要显示的文本
text_element.appendChild(text_node);
document.body.appendChild(text_element);

document.write("\n");

//规范化文本节点
var text_element0 = document.createElement("text_test0");
text_element0.className = "message";

var text_node0= document.createTextNode("Don not do it"); //创建第一个要显示的文本
text_element0.appendChild(text_node0);
var text_node1= document.createTextNode("again"); //创建第二个要显示的文本
text_element0.appendChild(text_node1);
document.body.appendChild(text_element0);

//alert(text_element0.childNodes.length);  //2
text_element0.normalize();   //这里执行合并
//alert(text_element0.childNodes.length);  //1
//alert(text_element0.firstChild.nodeValue); //这里显示的是合并后的值



//动态加载脚本
function load_script(url) {
    
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}

//load_script("dynamic.js");


//直接加载代码的方式
function loadscript_code(code) {
    
    var script = document.createElement("script");
    script.type = "text/javascript";
    try{
        
        script.appendChild(document.createTextNode(code));    
        
    }
    catch(ex) {
        
        script.text = code;
        
    }
    document.body.appendChild(script);
    
}

//loadscript_code("function say_hi(){alert("hi");}");


//DOM 扩展

//获取body元素
var dom_exp_body0 = document.querySelector("body");
if(null != dom_exp_body0) {
  //  alert("find the body");

}

//查找id为java的元素
var dom_exp0 = document.querySelector("#java");
if(null != dom_exp0) {

 //   alert("the id=java text is " + dom_exp0.firstChild.nodeValue);  //Java
}

    
//查找所有为p的元素    
var dom_exp1 = document.querySelectorAll("p");    
if(null != dom_exp1) {
    
    var i = 0;
    var len = 0;
    var node_tmp = null;
    for(i=0,len=dom_exp1.length; i<len; ++i) {
        node_tmp = dom_exp1.item(i);   
    //    alert("the node value is  " + node_tmp.firstChild.nodeValue);
    }


}


//遍历元素的子元素

//第一种遍历元素子元素的方式
var dom_exp2 = document.querySelectorAll("p");
if(null != dom_exp2) {
    
    var i = 0;
    var len = 0;
    var node_tmp = null;
    var ii = 0;
    var j = 0;
    var len_child = 0;
    var child = null;
    
    for(i=0,len=dom_exp2.length; i<len; ++i) {
        node_tmp = dom_exp2.item(i);   
        
        //遍历元素的子元素
        child = node_tmp.firstChild;
        for(j=0;j<node_tmp.childNodes.length; ++j) {
            if(3 == child.nodeType) {
        
            //    alert(child.nodeValue);
            }
            child = child.nextSibling;
        
        }
 
    }
    

}


//第二种遍历元素子元素的方式
var dom_exp3 = document.querySelectorAll("p");
if(null != dom_exp3) {
    
    var i = 0;
    var len = 0;
    var node_tmp = null;
    var ii = 0;
    var j = 0;
    var len_child = 0;
    var child = null;
    
    for(i=0,len=dom_exp3.length; i<len; ++i) {
        node_tmp = dom_exp3.item(i);   
        
        //node_tmp.childNodes.length=1
        //node_tmp.childElementCount = 0
        
        //遍历元素的子元素
        child = node_tmp.firstElementChild;
        while(child != node_tmp.lastElementChild) {
        
         //   alert(child.nodeValue);
            child = child.nextElementSibling;
        }
    }
}

    

/*html5*/

//获取所有指定类名的元素，返回的是nodeList,这api是原生的
var html50 = document.getElementsByClassName("example");
if(null == html50) {
//    alert("can not find the class name");

}
else {

//    alert(html50.item(0).firstChild.nodeValue);

}


//classList
var html51_classlist = document.getElementById("python");
html51_classlist.classList.add("python_class");  //增加一个类
if(html51_classlist.classList.contains("python_class")) {   //检测一个类是否存在

//    alert("contain the class list");

}
else {

 //   alert("do not contain the classList");

}



//获取焦点
var html52 = document.getElementById("my_buttom");
if(null != html52) {

//    html52.focus();  //集中到这个元素上去
//    alert(document.hasFocus());   //检测文档是否获取了焦点，检测用户是否在和文档进行交互
//    alert("the focus is" + (document.activeElement ==  html52)); //检测是否集中到这个按钮上
}


//实际测试中，书本上表明会有两种状态:loading 和 complete，但实际测试测试的有点不同
if(document.readyState == "complete") {

   // alert("the document has downloaded");

}



//兼容模式，实际上是用来告诉开发人员采用的是那种渲染模式
//alert("the mode is " + document.compatMode);   //CSS1Compat

//head属性

var html53 = document.head || document.getElementsByTagName("head")[0];

if(null != html53) {

  //  alert("find the head ");
}




//字符集属性
//alert(document.characterSet);  //"UTF-8"    //查看字符集属性
//document.characterSet = "UTF-16";  //设置字符集属性   
    
//让元素进行滚动    
//document.forms[0].scrollIntoView();





//检测DOM支持的模块,如果不支持，会返回false

var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0");
var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");

//实际测试不管怎样做都返回true
if(true != supportsDOM2Core) {

//    alert("not support the core!");

}
else {

//    alert("support the core");

}
    




//dom2 级的命名空间

//使用这个函数返回的是NodeList
var name_space0 = document.getElementsByTagName("html");
if(null != name_space0) {
    
    var name_space_node0 = name_space0.item(0);
//    alert(name_space_node0.tagName + "  " + name_space_node0.localName + "   " + name_space_node0.namespaceURI);  //HTML  html  http://www.w3.org/1999/xhtml


}


//dom3级命名空间




//检测浏览器是否支持反范围
var support_range = document.implementation.hasFeature("Range","2.0");
if(true === support_range) {  //如果支持范围特性


    var range_fun = (typeof document.createRange ==  "function" );  //检测该功能是不是函数
    if(true == range_fun) {
    
        var new_range = document.createRange(); //这里是创建一个范围
    
    }

}

    
//用dom范围实现简单的选择
var range_test0 = document.createRange();   //创建两个范围
var range_test1 = document.createRange();

var range_value0 = document.getElementById("python");

range_test0.selectNode(range_value0); //选择了元素本身及其所包含的所有子节点
range_test1.selectNodeContents(range_value0);  //只是选择了其子节点



//用dom范围实现复杂的选择


var range_test2 = document.createRange();
var range_test3 = document.createRange();
var range_value1 = document.getElementById("python");
if(null != range_value1) {
    
    var range_index = -1;
    var i  = 0;
    var length = range_value1.parentNode.childNodes.length; //所有子节点的长度
  //  alert("the length is " + length);
    
    for(i=0;i<length; ++i) {
        if(range_value1.parentNode.childNodes.item(i) ==  range_value1) {  //找到该节点所在的位置
        
                range_index = i;
                break;
        
        }
    
    }
    
    //模仿selectNode()
    range_test2.setStart(range_value1.parentNode,range_index);
    range_test2.setEnd(range_value1.parentNode,range_index+1);
    
    //模仿selectNodeContents()
    range_test3.setStart(range_value1,0);
    range_test3.setEnd(range_value1,range_value1.childNodes.length);
    
}   



//操作dom范围内的文档

var range_test3 = document.createRange();    
var range_value3 = document.getElementById("python"); 
//Python  -> Phon  删除了中间几个字符
var range_hello = range_value3.childNodes.item(2);
range_test3.setStart(range_hello,1);
range_test3.setEnd(range_hello,3);
//range_test3.deleteContents();   //删除选中的内容


//extractContents()函数的调用,这个函数也是删除选中的内容，但是会返回删除的内容，看下面的示范

var range_test4 = document.createRange();    
var range_value4 = document.getElementById("python"); 
//Python  -> Phon  删除了中间几个字符
var range_hello4 = range_value4.childNodes.item(2);
range_test4.setStart(range_hello,1);
range_test4.setEnd(range_hello,3);

//var  range_return0 = range_test4.extractContents();  //这里是进行删除
//range_value4.parentNode.appendChild(range_return0);  //返回的节点信息进行重新的插入到python所在的父节点


//克隆范围节点,cloneContents()这个函数是用来创建范围对象的一个副本

var range_test5 = document.createRange();    
var range_value5 = document.getElementById("python"); 
var range_hello5 = range_value5.childNodes.item(2);
range_test5.setStart(range_hello,1);
range_test5.setEnd(range_hello,3);

//var  range_return1 = range_test5.cloneContents();  //这里是进行节点的复制,不删除原来节点的信息
//range_value5.parentNode.appendChild(range_return1);  //返回的节点信息进行重新的插入到python所在的父节点

//插入DOM范围中的内容

var range_test6 = document.createRange();
var range_value6 = document.getElementById("python");
var range_hello6 = range_value6.childNodes.item(2);
range_test6.setStart(range_hello6,1);
range_test6.setEnd(range_hello6,3);

var  range_elem6 = document.createElement("span");
range_elem6.style.color = "red";
range_elem6.appendChild(document.createTextNode("inser node for range"));
//range_test6.insertNode(range_elem6);   //在这个范围内插入节点  效果是：helloPinser node for rangeython
range_test6.detach();
range_test6 = null;

//环绕式的插入,常用语渲染某部分的背景

var range_test7 = document.createRange();
var range_value7 = document.getElementById("python");
var range_hello7 = range_value7.childNodes.item(2);
range_test7.setStart(range_hello7,0);
range_test7.setEnd(range_hello7,6);

var range_elem7 = document.createElement("span0");
range_elem7.style.color = "yellow";
range_test7.surroundContents(range_elem7); //环绕，相当于把背景设置为黄色
//进行分离和清空
range_test7.detach();
range_test7 = null;



//检测浏览器是否支持遍历API,如果支持，就返回true

var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0");
var supportsNodeIterator = (typeof document.createNodeIterator == "function");
var supportsTreeWalker = (typeof document.createTreeWalker == "function");



//遍历函数的方式


//这里是没有过滤条件
var bianli0 = document.getElementById("list");
var bianli_node0 = document.createNodeIterator(bianli0,NodeFilter.SHOW_ALL,null,false);
var bianli_value0 = bianli_node0.nextNode();
while(null != bianli_value0) {

    //alert(bianli_value0.tagName);
    bianli_value0 = bianli_node0.nextNode();

}




//加入过滤条件

var bianli1 = document.getElementById("list");

//这里过滤的是只有标签div才能经过
var bianli_filter1 = function(node) {
    
    return node.tagName.toLowerCase() == "div" ?NodeFilter.FILTER_ACCEPT :NodeFilter.FILTER_SKIP;
}

var bianli_node1 = document.createNodeIterator(bianli1,NodeFilter.SHOW_ALL,bianli_filter1,false);
var bianli_value1 = bianli_node1.nextNode();
//while(null != bianli_value1) {

 //   alert(bianli_value1.tagName);
 //   bianli_value1 = bianli_node1.nextNode();

//}








//偏移量相关
function get_element_left(element) {

    var real_left = element.offsetLeft;
    var current = element.offsetParent;
    
    while(current != null) {
    
        real_left += current.offsetLeft;
        current = current.offsetParent;
    }
    
    return(real_left);
}


function get_element_top(element) {

    var real_top = element.offsetTop;
    var current = element.offsetParent;
    
    while(current != null) {
    
        real_top  +=  current.offsetTop;
        current = current.offsetParent;
    }
    return(real_top);
}


//测试偏移量,所有这些偏移量都是只读的，而且每次读取的时候都要重新计算，所以最好的方式是只计算一次，保存局部变量
var pianyi_offset000 = document.getElementById("python");
if(null != pianyi_offset000) {

 //   alert("offset_left==" +get_element_left(pianyi_offset000) + "offset_top==" + get_element_top(pianyi_offset000) );

}



//测试客户区的大小
var kefuqu0 = document.getElementById("python");
if(null != kefuqu0) {

 //   alert("length===" + kefuqu0.clientWidth + "height====" + kefuqu0.clientHeight);

}



//确定元素的大小



function getBoundingClientRect(element){
    
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;
    
    if (element.getBoundingClientRect){
        
        if (typeof arguments.callee.offset != "number"){
            
            var temp = document.createElement("div");
            temp.style.cssText = "position:absolute;left:0;top:0;";
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        
        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        
        return {
            left: rect.left + offset,
            right: rect.right + offset,
            top: rect.top + offset,
            bottom: rect.bottom + offset
        };
        
    } 
    else {
        
        var actualLeft = getElementLeft(element);
        var actualTop = getElementTop(element);
        
        return {
            left: actualLeft - scrollLeft,
            right: actualLeft + element.offsetWidth - scrollLeft,
            top: actualTop - scrollTop,
            bottom: actualTop + element.offsetHeight - scrollTop
        }
    }
}
var yuansu_daxiao0 = document.getElementById("python");    
    
var rect_yuansu0 = getBoundingClientRect(yuansu_daxiao0);
alert(rect_yuansu0.top + "  " + rect_yuansu0.bottom + "  " + rect_yuansu0.left + "  "  + rect_yuansu0.right);


//javascript中的最重要的类型就是对象，对象是名:值对的集合，或者是字符串到值映射的集合

var book  = 
{
    topic: "javascript",
    fat: true
      
};

//对象可以通过.或者是[ ]来访问对象属性

//book.topic
//book["topic"]

//通过赋值创建新的对象
book.new_node = "this is a test";
book.content = {};  //这里是创建一个空的属性，它没有对象

//在数组的创建上和C语言没有很大的差别
var primes = [1,2,3,4];

//访问元素
//primes[0];

//这个是元素的长度
//primes.length

//这里是创建新的元素
//primes[10] = "134";

//数组和对象中都可以包含另外一个数组或是对象，看下面的示范:
var  points = [
    
  { x:0,y:0 },
  {x:1, y:1}
    
];








alert("hello,this is just a test!\n");

    
    
    
    
    
    
    
    










