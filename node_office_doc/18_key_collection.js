
//map键值映射

function map_test0(){

    var tmp = null;

    //创建map映射
    var sayings = new Map();
    //往里面添加元素
    //这里添加了两个，实际遍历的时候只会出现一个
    sayings.set("dogs","wooofs");
    sayings.set("dogs","wooofs");
    sayings.set(123,"12345");
    //获取map大小
    console.log(sayings.size); //2
    
    tmp = sayings.has("123");
    console.log("1_______"+tmp);  //false

    //检测是否有该键值
    tmp = sayings.has(123);
    console.log("2_______"+tmp);  //true


    //获取键值
    tmp = sayings.get("dogs");
    console.log("3________"+tmp);  //wooofs

    //测试删除
    sayings.delete(123);
    tmp = sayings.has(123);
    console.log("4_______"+tmp);   //false

    //遍历map的方式
    for (var [key,value] of sayings){

        console.log(key + "  goes  " + value);
    }
}

//map_test0();



/*
object 和map的比较:
1.object 的键均为strings类型，在map里键可以任意一种类型
2.必须手动计算object的尺寸,但是可以很容易获取到map的size
3.map的遍历遵循其插入顺序，object的属性是根据hash算法计算出的
一个值，然后再进行排列的，也就是说，其顺序是不一定的。

 */


/*
sets：集合。是值的一些集合，里面的值是不重复的，遍历的时候
会按照添加的顺序进行遍历.
 */

function sets_test(){

    var tmp = null;
    var my_set  = new  Set();
    my_set.add(1);
    my_set.add("this");
    my_set.add("a");

    tmp = my_set.has(1);
    console.log("1______" + tmp);  //true
    my_set.delete(1);
    tmp = my_set.has(1);
    console.log("2______" + tmp);  //false

    console.log("3_______"+my_set.size);  //2

    //这里是进行元素的遍历
    for(let item of my_set){

        console.log("4_______"+item); 
    }
     

     //数组转sets集合，会把里面重复的元素去掉
     var my_set2 = new Set([1,1,2,3,4]);
     for(let item of my_set2){

         console.log("5______"+item); //1 2 3 4
     }

     //sets集合转数组
     var my_array = Array.from(my_set2);
     my_array.forEach(

        (item)=>{
            console.log(item); //1 2 3 4
        }
     );
/**
*数组中用于判断元素是否存在的indexOf 函数效率低下
*集合对象允许根据值删除元素，而数组中必须使用基于下标的splice方法
*数组的indexOf方法无法找到NaN值
*集合对象存储不重复的值，所以不需要手动处理包含重复值的情况
 */

}

//sets_test();



/**
 * 其它知识点:
 * WeakSet里面值都是对象,其它操作和set相同
 * WeakMap里面的键值都是对象，其它和map相同
 */





