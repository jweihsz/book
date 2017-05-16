/**
 * javascript字符串中的元素是由16bit无符号的元素所组成。
 */

//几种转义

//16进制的转义，\x之后接16进制的数值
function test_16(){

    console.log('\xA9');
}

//test_16();

//Unicode转义序列,\u后面至少跟4个字符,用这种方式进行转义几乎能包括所有的字符
function uniconde_test(){

    console.log('\u00A9');

}

//uniconde_test();


//字符串对象
function string_object(){

    var s = new String("hello");  //[String: 'hello']
    console.log(s);
    console.log(typeof s);  //object
}

//string_object();


/**
 * 但是一般来说，我们不建议使用String对象，因为所有的直接字符串字面量都可以转换为临时的String对象，操作完毕之后，
 * 这个临时对象会删除，而且String对象可能会存在许多不确定的地方。下面是直接操作字符串：
 */


function string_direct(){


    console.log("hello".length);  //5
    console.log("hello".charAt(0));  //h
}

//string_direct();





//测试字符串对象方法


function string_fun(){

    console.log("hello".charAt(0));    //h 获取第0位置的字符
    console.log("hello".charCodeAt(0));  //104  获取第0位置字符的编码
    console.log("hello".indexOf('l'));   //2 返回最先出现‘l’位置的下标
    console.log("hello".lastIndexOf('l')); //3  最后出现'l'的位置
    console.log("hello".startsWith("he")); //true 检测字符串是否以某个字符串开头
    console.log("hello".endsWith("ll"));    //false 检测字符串是否以某个字符串作为结尾
    console.log("hello".includes("ll"));    //true 检测字符串是否包含某个字符串
    
    /* 连接某个字符串,注意，这里返回的是新的字符串*/
    var cat_str = "hello".concat("world");
    console.log(cat_str);


    /**
     * str.split([separator][,limit]),separator代表分割符或正则表达式，用什么来进行分割字符串，limit代表分割的上限
     * (1)separator=空字符串,将把原字符串分割成一个一个的字符数组
     * (2)忽略separator，把源字符串分割成一个一个的字符
    */
    console.log("hello world".split());  //没有分割符 [ 'hello world' ]
    console.log("hello world".split(' '));  //以空格进行分割 [ 'hello', 'world' ]
    console.log("hello world".split('')); //以空字符串进行分割  [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
    console.log("hello world".split('s')); //以字符串中不存在的字符进行分割 [ 'hello world' ],返回的是自身

    //截取字符串
    console.log("hello world".slice(0,-3)); //hello wo   截取从0到-3的子字符串

    //match, replace, search这3个方法都是通过正则表达式来进行操作

    console.log("hello".repeat(3));   //把“hello”重复3次之后返回

    console.log("   this  is   ".trim()); //把字符串首部和尾部的空格去掉

}


//string_fun();


/**
 * 模板字符串，模板字符串的方式是：``(是tab上方的按键),这种方式可以让字符串中插入表达式，也就是说，在显示字符串的时候，会先去
 * 计算里面的表达式，计算完毕之后，再进行显示。表达式的方式是：${表达式}
 */

function string_template(){

    console.log(`hdhehhehhehhdhe
    daafafafddddddddddddddafafaf`); //用来显示多行字符串,这里对没有忽略换行符

    //把表达式嵌入到字符串中
    var a = 10;
    var b = 100;
    console.log(`the add a + b is: ${a+b} `);  //the add a + b is: 110



}

string_template();

