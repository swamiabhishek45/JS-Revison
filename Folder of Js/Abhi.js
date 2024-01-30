// Naming Conventions
// Camelcase
// let firstName = "Abhishek";
// console.log(firstName);

// Pascalcase
// let LastName = "Swami";
// console.log(LastName);

// Snakecase
// let middle_name = "Baswaraj";
// console.log(middle_name);


// 1. three Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is document write")

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values
var number1 = 34;
let number2 = 56;
const number3 = 46;
// console.log(number1 + number2 + number3);

// 4. Data types in JavaScript
// 1) Number
var num1 = 455;
var num2 = 56.76;

// 2) String
var str1 = "This is a string";
var str2 = "This is also a string";

// 3) Object
var marks = {
  ravi: 34,
  shubham: 78,
  harry: 99.977,
};
// console.log(marks);

// 4) Booleans
var a = true;
var b = false;
// console.log(a, b);

// 5) Undefined
// var und = undefined;
var und;
// console.log(und);

// 6) NULL
var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/
var arr = [1, 2, "bablu", 4, 5];
// console.log(arr)

// 5. Operators in JavaScript
// 1) Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// 2) Assignment Operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// 3) Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// 4) Logical Operators

// Logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// 6. Function in JavaScript
// 1. Function Declaration
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
// DRY = Don't Repeat Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// 2. Function Expression

const myFunc = function(){

}

// 3. Arrow Function

const myFunc2 = () => {}

// 7. Conditionals in JavaScript
/*
// 1) Single if statement
var age = 41;
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

// 2) if-else Ladder
age = 25;
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// 8. Loops id Js
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// 9. Array Methods
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Abhi")
// myArr.shift()
// const newLen = myArr.unshift("Abhi")
// console.log(newLen);
// console.log(myArr);

// 10. String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good Harry";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1,4))

d = myLovelyString.replace("Harry", "Rohan");
// d = d.replace("good", "bad");
// console.log(d, myLovelyString)

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

tn = document.getElementsByTagName("div");
// console.log(tn);

createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold para";
tn[0].replaceChild(createdElement2, createdElement);

// Selecting using Query
sel = document.querySelector(".container");
// console.log(sel)
sel = document.querySelectorAll(".container");
// console.log(sel)

//Events in Javascript
function clicked() {
  // console.log("The button was clicked");
}

// con.addEventListener('mouseover', function(){
//     console.log("Mouse on paragraph");
// })
// con.addEventListener('mouseout', function(){
//     console.log("Mouse out of paragraph");
// })

// firstContainer.addEventListener('click', function(){
//     console.log("Container on container");
// })

firstContainer.addEventListener("mouseup", function () {
  console.log("Mouseup when clicked on container");
});
firstContainer.addEventListener("mousedown", function () {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b> We have clicked </b>";
  console.log("Mousedown when clicked on container");
});
