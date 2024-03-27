/*
// higher order function --> a function which accepts function as a parameter or returns a function

function hof(myFunc){
    console.log("This is higher order function");
}

hof(function myFunc(){});

function hof(){
    return function myFunc(){
        console.log("This is higher order function");
        
    }
}

hof()();


// Constructor function --> a function which uses this keyword inside function

function Person(gender){
    this.name = "Abhishek";
    this.age = 21;
    this.gender = gender;
}

var person1 = new Person();
console.log(person1);

var person2 = new Person("Male");
console.log(person2);

// first class function

function myFunc(){}

// "new" keyword --> it creates new blank object


*/
// iife --> immediately invoked function expression -> used to create private variables
var ans = (function () {
  var a = 34;

  return {
    getter: function () {
      console.log(a);
    },
  };
})();
