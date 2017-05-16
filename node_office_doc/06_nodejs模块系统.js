/*引入外部模块的第一种方式 */

var hello0_module = require("./hello0");
hello0_module.hello_test();


/*引入外部模块的第二种方式 */

/*这种方式测试没有通过*/
var hello1_module = require("./hello1");
hello1_module.set_name_fun("kitty");
hello1_module.say_hello_fun();








