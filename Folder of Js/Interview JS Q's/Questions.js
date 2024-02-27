// forEach is a loop which works on arrays 

// (higher order function) => function inside function

// Question 1: Print hello infront of each array value
// arr.forEach((val) => {
//     console.log(val + "Hello");
// })

// Question 2: Print val less than 3
// arr.forEach(function(val){
//     if(val < 3) {
//         console.log(val);   
//     }
// })

// Question 3: sum of all elements of array
// let sum = 0;
// arr.forEach((val) => {
//     sum = sum +  val;
//     console.log(sum);
// })

// Question 4: add only numbers not string
var arr = [1, 2, 3, 4, '5', 6, 7, 8, 9, "10"];
let sum = 0;
arr.forEach((val) => {
    if(typeof val !== 'string'){
        sum = sum + val;
        console.log(sum);  
    }
})

// console.log(arr);
