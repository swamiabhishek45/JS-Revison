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


// TODO: Though the keys of arguments object look like numbers, "arguments" is not an array. 

// Arrow functions will not have arguments object


// 4. Write a function which executes only if the number of arguments match the number of parameters the function is expecting

function func(a, b, c) {
    // parameters
    console.log(func.length);
    console.log(arguments.length);

    if (func.length === arguments.length) {
        console.log("Number of arguments passed match the expected arguments!! par === arg");
    } else{
        throw new Error("Do not match!! par !== arg")
    }
}

func(1, "HEllo", true); // arguments



// 5. Design a function which can receive a variable number of arguments in parameters and print them

function varArgsFunc(...params){
    params.forEach(function(value, index){
        console.log(index, ":", value); 
    })
}

varArgsFunc("Love", "you", 3000);


// Function statements get hoisted unlike function expressions
// Arrow functions are not verbose
func()

function func(){
    console.log(1111);
}

// 6. Write a program where hoisting can be visualized

num1 = 10;
printHello();
console.log(num1); // 10

// variable declarations with var
var num1;

// function statement or declaration
function printHello() {
    console.log("Hello world!!");
    console.log(num1); // 10
}

// function expression do not get hoisted
var nonHoistedFunc = function () {
    console.log("Hello");
};
// arrow function do not get hoisted
var myFunc = () => {
    console.log("Helolo");
};

// IIFE

+(function IIFE() {
    console.log("I am an Immediately invoked function");
})();


(function(param1, param2){
    console.log("IIFE");
    console.log("Param1 : " + param1);
    console.log("Param2 : " + typeof param2);
    console.log(param2());
})("hello", function(){
    console.log("Inside the function");
    return true;
});

var randomNumber = (function(){
    return Math.floor(Math.random() * 100);
})();

*/



















































