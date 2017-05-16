


function hello_class(){

    var name = "";
    this.set_name_fun = function(new_name) {

        name = new_name;
    };


    this.say_hello_fun = function() {

        console.log("the name is" + name);

    };
};


module.exports = hello_class;


