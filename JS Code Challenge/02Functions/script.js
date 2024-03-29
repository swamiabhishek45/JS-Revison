/*
// 1) Write a function which returns another function and execute it after calling

function higherOrderFunction() {
    function displayHello(){
        console.log("Hello Abhishek!");
    }
    return displayHello
}

var func = higherOrderFunction();
func();

// higherOrderFunction()();

// 2) Write a function which executes another function received as an argument

function callBackExecutor(callback){
    if(typeof callback === "function"){
        callback();
    }
}

function callBackFunc(){
    console.log("CallBack function executed");
}

callBackExecutor(callBackFunc); // pass its reference hence no parenthesis
*/

// 3) Create a function having no parameters declared and print all the arguments passed to it

// When a function is invoked the arguments passed to it are accessible using the default object called "arguments"

function func(){
    // for(let key in arguments){
    //     console.log(arguments[key]);
    // }

    console.log(arguments.length); // The arguments object will have a length property

    for (let value of arguments) {
        console.log(value);
    }
}

func(1, "Hello", true)