//  January 1, 1970,

let myDate = new Date();
// console.log(myDate); // 2024-02-10T12:33:18.460Z
// console.log(myDate.toISOString()); // 2024-02-10T12:33:18.460Z

// console.log(myDate.toString()); // Sat Feb 10 2024 18:03:18 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Feb 10 2024

// console.log(myDate.toLocaleString()); // 10/2/2024, 6:03:18 pm
// console.log(myDate.toLocaleDateString()); // 10/2/2024
// console.log(myDate.toLocaleTimeString()); //6:03:18 pm

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 10);
// let myCreatedDate = new Date(2024, 1, 10, 7,30);
// let myCreatedDate = new Date("2024-02-10");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp.toLocaleString()); // 17,07,56,93,05,473
// console.log(myTimeStamp.toExponential());  //1.707569305473e+12

// console.log(myTimeStamp.toFixed()); // 1707569305473
// console.log(myTimeStamp.toString()); // 1707569305473

// console.log(Math.floor(myTimeStamp/1000)); // sec--> 1707569646


let newDate = new Date();
// console.log(newDate.getDate()); 
// console.log(newDate.getFullYear()); 


// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeStyle: 'medium'
// })
