//操作数组长度也能达到初始化数组的目的

function index_test0(){

    var test = [];
    test.length = 3;    //数组被初始化为长度为3
    console.log(test);

    test[0]=1;
    test[1]=2;
    test[2]=3;

    test.length = 0;   //清空了数组中的所有元素
}

//index_test0();


//使用Array来多数组进行初始化
function index_test1(){

    //下面的两种初始化方式是等价
    var array_test = new Array(43);
    array_test = Array(43);

    //在array中，如果使用非整数进行初始化,则会发生错误

    //array_test = Array(10.2);    //运行的时候会提示错误

}

//index_test1();



//如果数组的下标不是整数，那么系统会把其解析为添加数组的属性
function index_test2(){

    var  array_test = [];
    array_test[0] = 10;
    array_test[10.2] = 10;   //10.2将作为数组的属性
    console.log(array_test.hasOwnProperty(10.2));  //true

}

//index_test2();

//遍历数组的方式

function  index_test3(){

    var   fruits = ["apple", ,"banned"];
    var i = 0;
    var length = fruits.length;

    //普通的遍历方式
    for(i=0;i<length;++i){

        console.log(fruits[i]); //apple undefinded banned
    }


    //用forEach进行遍历,对于系统初始化时候默认为undefinded的，不会进行遍历
    fruits.forEach((ele)=>{console.log(ele)}); //apple  banned

    //如果人为的设定为undefined的,则会进行遍历
    fruits[1] = undefined;

    fruits.forEach((ele)=>{console.log(ele)});  //apple undefinded banned



}

//index_test3();


//数组的方法




function indexed_test4(){

    //some:只要数组中的一项在回调函数中返回true，整个方法就返回true
    var some_array = [1,2,"hello"];
    var ret = false;
    ret = some_array.some((elem)=>{return(typeof elem == "number");});
    console.log("1_____"+ret);  //true
    
    //every:数组中的每一项在回调函数都返回true的时候，方法才返回true

    ret = some_array.every((elem)=>{return(typeof elem == "number");});
    console.log("2_____"+ret);   //false

    //filter:在回调函数中返回true的元素将会返回
    var filter_array = [1,,4,5,78,100];
    ret = filter_array.filter(
        (elem)=>{
            if(elem > 50){return true};
            return(false);
        }); 
    console.log("3_______"+ret); // 78  100


    //map： 对每个数组运用回调函数，并返回新的数组,map对undefined的元素也会遍历

    ret = filter_array.map(
        (elem)=>{

            return(elem*2);
        }
    );

    console.log("4_______"+ret);


    //indexOf: 查找某个元素，如果有，返回下标，如果没有找到，返回-1
    ret = filter_array.indexOf(78,2);  //从下标2开始查找目标元素
    console.log("5________"+ret);


    //sort 对数组进行排序,这里是对原数组进行排序
    var sort_array = [1,,4,,378,3];
    sort_array.sort(
        
        (a,b)=>{

            if(a > b)return(1);
            if(a < b)return(-1);
            return(0);
        }
    );
    //undefined 被认为数无穷大
    console.log("6_________"+sort_array); //[ 1, 3, 4, 378, ,  ]

    //reverse:对数组进行颠倒
    console.log("7_________"+sort_array.reverse());

    //slice:从数组中取一个片段,返回这个新的片段
    var new_array = sort_array.slice(1,5);  //获取下标范围在1-5的元素
    console.log("8__________"+new_array);

    //从数组中移除一些元素，并用一些元素替换(可选)
    console.log("9__________"+sort_array.splice(1,2,56));
}

indexed_test4();













