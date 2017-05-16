
/*把函数作为参数进行传递 */



function fun_say_hello(context) {

    console.log("the content is:" + context);

}



function fun_exe(fun,content) {

    fun(content);

}


fun_exe(fun_say_hello,"just a test");



/* 用匿名函数进行传递*/

fun_exe(function(content){
    console.log("this is a test2:"+content);
},"hello");










