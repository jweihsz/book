/**
 * 所有的数字都是双精度浮点型，不管是浮点型还是整数型，数字的范围是在-(2^53-1) 到 (2^53-1)这个范围内。
 * 还有3个数字符号表示的方式:+Infinity(正无穷大)、-Infinity(负无穷大)和 NaN(不是一个数字)
*/


function decimal_number(){

    console.log(0888);   //888
    console.log(0777);  //511
}
//十进制可以以0开头表示，只要后面跟的数字大于8，那么就会解析成十进制，如果小于8，那么会解析成八进制
//decimal_number();



/**
 * 二进制数字只能以0b或是0B开头，后面跟的数字只能是0和1，不能为其它数据
 */

function binary_number(){

    console.log(0b00000001);  //1
    console.log(0B0000000111); //7
   // console.log(0B12123121);    //提示错误

}

//binary_number();


/**
 * 八进制数字语法是以0开头，但是假如0后面的数字不在0-7范围内，该数字将会被认为是十进制数字
 */


function octal_number(){

    console.log(07676);  //4030
    console.log(077778); //77778 被当作是十进制
}

//octal_number();




/**
 * 数字对象
 */


function number_object(){

    console.log(Number.MAX_VALUE);   //可表示的最大值
    console.log(Number.MIN_VALUE);   //可表示的最小值
    console.log(Number.NaN);   //表示非数字
    console.log(Number.NEGATIVE_INFINITY);//负无穷，溢出时返回
    console.log(Number.POSITIVE_INFINITY); //正无穷，溢出时返回
    console.log(Number.MIN_SAFE_INTEGER); //最小的安全整数
    console.log(Number.MAX_SAFE_INTEGER);  //最大的安全整数


}


//number_object();


/**
 * 数字方法
 */

function number_fun(){

    var  tmp = '';
    tmp = Number.parseFloat("1234566.7a8");   //把字符数字解析为浮点数，碰到非数字就停止解析
    console.log("1____"+tmp);

    tmp = Number.parseInt("12345678"); //把字符串解析为整数
    console.log("2____"+tmp);

    tmp = Number.isFinite(123242432);  //判断数字是否为有限数字
    console.log("3____"+tmp);

    tmp = Number.isInteger(45678); //判断数字是否为整数
    console.log("4____"+tmp);

    tmp = Number.isNaN(1232134);  //判断数字是否为NaN
    console.log("5____"+tmp);

    tmp = Number.isSafeInteger(1332.0324);  //判断数字是否为安全整数
    console.log("6____"+tmp);

}

//number_fun();


/**
 * 数学对象和方法
 * 用户不能创建Math对象，只能使用内置的Math对象
 */

function math_fun(){

    var tmp = '';
    tmp = Math.PI;
    console.log("1____"+tmp);

    tmp = Math.abs(-234.0);  //绝对值
    console.log("2____"+tmp);

    tmp = Math.sin(Math.PI/2);
    console.log("3____"+tmp);

    tmp = Math.log2(2);
    console.log("4____"+tmp);

    tmp = Math.log10(100);
    console.log("5____"+tmp);

    tmp = Math.pow(2,3);  //2的3次方
    console.log("6____"+tmp);

    tmp = Math.floor(3.6);  //3 返回小于参数的最大整数
    console.log("7____"+tmp);

    tmp = Math.ceil(3.6);  //4 返回大于参数的最大整数
    console.log("8____"+tmp);

    tmp = Math.min(11,222,3,67,8,9,0); //返回参数序列中的最小值
    console.log("9____"+tmp); 

    tmp = Math.max(11,222,3,67,8,9,0); //返回参数序列中的最大值
    console.log("10____"+tmp); 

    tmp = Math.random(); //返回0和1之间的随机数据
    console.log("11____"+tmp*100);


    tmp = Math.round(4.5);  //四舍五入
    console.log("12____"+tmp);

    tmp = Math.fround(4.5);
    console.log("13____"+tmp);


    tmp = Math.trunc(4.5);   //4 截去小数部分，保留整数
    console.log("14____"+tmp);

    tmp = Math.sign(34.6);   //1  数字的符号，说明数字是负数、正数、0
    console.log("15____"+tmp);


}


//math_fun();








/**
 * 
 * 测试时间
 * 
 */

function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = "12";
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  temp += (hour >= 12) ? " P.M." : " A.M.";
  return temp;
}

console.log(JSClock());







