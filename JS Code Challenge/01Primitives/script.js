/*
// typeof operator --> returns a string indicating the type of operand.

console.log(typeof 50); // number
console.log(typeof "text"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof function(){}); // function
console.log(typeof 10n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof [1,2,3]); // object
console.log(typeof {}); // object

console.log(typeof NaN); // number --> (NaN is not a number)
console.log(typeof undeclaredVar); // undefined --> (undeclaredVariable is never declared)
console.log(typeof Infinity); // number --> (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
console.log(typeof null); // object --> (This stands since beginning of JavaScript)
console.log(typeof /regex/); // object --> (regular expression start and end with '/' in literal form)
console.log(typeof typeof 1); // string
typeof new Date(); // object

// Concatenation of strings and numbers

console.log(1 + "2"); // "12"
console.log(1+2+"3"); // "33"
console.log(1+2+"3"+4+5); // "3345"
console.log(1+2+"3"+(4+5)); // "339"

// conversion from number to string and vice versa

const num = 34;

console.log(String(num)); // "34"
console.log(num.toString()); // "34"
console.log(num.toString(2)); // "100010"

const str = "12.034";

console.log(Number(str));
console.log(+str);
console.log(parseInt(str)); // It gives pure integer number
console.log(parseFloat(str));

console.log(Math.abs(-4));
console.log(Math.floor(-1.2));
console.log(Math.floor(1.9));


console.log(0.1+0.2 - 0.3 < Number.EPSILON);
console.log("true" || true);
console.log(Number.isNaN("bla"));

*/