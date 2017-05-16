//创建一个正则表达式

/**
 * 字面量的方式。这种方式是在脚本加载后进行编译的，如果正则表达式是个常量，
 *使用这种方式可以获得更好的性能
 */

function regular_create_direct(){

    var test = /ab+c/;
}

/**
 * 调用new RegExp()来进行创建。这种方式是当你不确定正则表达式是怎样的时候，需要在代码运行时
 * 才能确定，那么就使用这种方式。
 * 
 */

function regular_create_express(){

    var test = new  RegExp("ab+c");
}


//测试字符\

function test0(){

    var test_value = '';
    test_value = /a/.exec("aaaaaaa");   //a 匹配一个字符a
    console.log("1____"+test_value);
    test_value = /a\*/.exec("aaaa*"); //a*  匹配a*  \的作用是去掉其转义的功能
    console.log("2____"+test_value);

    /*匹配反斜杠,这个不管是在匹配表达式还是字符串表达式中都用\去掉其本身的转义 */
    test_value = /\\/.exec("\\");
    console.log("3____"+test_value);

}

//test0();

//匹配开头   ^

function test1(){

    var test_value = '';
    /*匹配以a开头的字符串，并且后面跟"very"，后面会提到，以()中的也会返回 */
    test_value = /^a(very)/.exec("averytest"); //avery,very
    console.log("1____"+test_value);//这里返回的元素包含两个元素

    test_value = /^hello/.exec("this  hello is just a test");  //不是以hello开头
    console.log("2____"+test_value);   //null

}

//test1();


//匹配结束  $
function test2(){

    var test_value = '';
    test_value = /abc$/.exec("this is a test abc"); //匹配以abc结尾
    console.log("1_____" + test_value);   //abc

    test_value =  /hello$/.exec("this is a test");   //匹配以hello结尾
    console.log("2_____"+test_value);  //null

    test_value = /^hell.*test$/.exec("hello ,this is a test");//匹配以hell开头，以test结束
    console.log("3_____"+test_value);

}

//test2();


//匹配前面(表达式)0次或是多次  *
function test3(){

    var test_value = '';
    test_value = /[0-9]*/.exec("1240830hello");//匹配目标中0次或是多次的数字
    console.log("1_____" + test_value);  //1240830

}

//test3();



//匹配前面（表达式）1次或是多次 +
function test4(){

    var test_value = '';
    //下面这个示范会把"hello"当作一个整体
    test_value = /hello+/.exec("you must  change it soon");
    console.log("1_______"+test_value);  //null

    test_value = /hello+/.exec("this is  hello a hello");
    console.log("2______"+test_value); //hello
}

//test4();

//匹配前面的(表达式)0次或是1次,?。如果？跟在* +  {}后面，将会使转变成非贪婪模式
//来匹配尽量少的数据

function test5(){

    var test_value = '';
    test_value = /a?/.exec("aaaaaaaaaaaaaaa");
    console.log("1_____"+test_value);  //a

    //+的模式是{1，}，加上？后，会让其取其最小值1次
    test_value= /[1-9]+?/.exec("hello,this123456767");
    console.log("2______" + test_value);//1

}

//test5();


//匹配除了换行符之外的任何(单个)字符   .


function test6(){

    var test_value = '';
    test_value = /.n/g.exec("are you bna and teng");  //这里好像只是匹配一次
    console.log("1______" + test_value); //bn 

}

//test6();



//匹配x，并保存x输出 (x)

function  test7(){

    var test_value = '';
    //这里hello本身也会保存到数组中
    test_value = /(hello)*/.exec("hello,this is hello");
    console.log("1_____"+test_value);  //hello,hello
}

//test7();


//匹配x，但是不保存x (?:x)
function test8(){

    var test_value = '';
    //对比于上面的输出结果，这里仅仅输出hello
    test_value = /(?:hello)/.exec("hello,this is hello");
    console.log("1______" + test_value); //hello
    
    test_value = /^you(?:best)/.exec("youbest are the best");
    console.log("2_______" + test_value);  //best
}

//test8();




//匹配x，仅当x后面接y的时候 x(?=y)
function test9(){

    var test_value = "";
    //只有hello后面连接you或是are的时候才会进行匹配
    test_value = /hello(?=you|are)/.exec("helloare");
    console.log("1_____"+test_value); //hello


    test_value = /hello(?=you|are)/.exec("hellovery");
    console.log("2______"+test_value);  //null

}

//test9();

//匹配x,仅仅当x后面不是接y的时候 x(?!y);

function test10(){

    var test_value = '';
    test_value = /hello(?! you|are)/.exec("hellovery");
    console.log("1_______"+test_value); //hello

}

//test10();



//匹配x或是y  x|y

function test11(){

    var test_value = '';
    test_value = /hello|you/g.exec("this is hello and you");
    console.log("1____"+test_value);  //hello
}

//test11();



//匹配前面的正整数刚好n次
function test12(){

    var test_value = '';
    //数目不够
    test_value = /abc{4}/.exec("abc");
    console.log("1____"+ test_value);  //null
    //数目刚好
    test_value = /abc{4}/.exec("abcccc");
    console.log("2_____" + test_value);   //abcccc
    //数目过多
    test_value = /abc{4}/.exec("abccccccccccccccc");  //过多的数目会忽略，不匹配
    console.log("3_____" + test_value);   //abcccc

}
//test12();


//匹配前面单个的字符至少n次，之多m次  {n,m}

function test13(){

    var test_value = '';
    test_value = /abc{1,3}/.exec("abcccccccc");
    console.log("1______" + test_value); //abccc

}

//test13();


//匹配一个单字字符(字母、数字或者下划线),等价于[A-Za-z0-9]   \w

function test14(){

    var test_value = '';

    test_value = /ab\wd/.exec("abcd");
    console.log("1___"+test_value);  //abcd

}

//test14();

//匹配一个非单字字符(非字母、数字或者下划线),等价于[^A-Za-z0-9]   \W

function test15(){

    var test_value = '';
    test_value = /ab\Wd/.exec("abcd");
    console.log("1___"+test_value);  //null

    test_value = /ab\Wd/.exec("ab%d");
    console.log("2___"+test_value);  //ab%d

}
//test15(); 


//\s 匹配空格
//\S 匹配非空格
//\d 匹配数字
//\D 匹配非数字















































