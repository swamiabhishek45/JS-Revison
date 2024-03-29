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

*/
// 2) Write a function which executes another function received as an argument

function callBackExecutor(callback){
    if(typeof callback === "function"){
        callback();
    }
}

function callBackFunc(){
    console.log("CallBack function executed");
}

callBackExecutor(callBackFunc);