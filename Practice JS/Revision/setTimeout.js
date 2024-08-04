"use strict";

console.log("Script start");

function hello(){
    console.log("Hello");
}

const id = setTimeout(hello, 1000);
const id2 = setTimeout(hello, 2000);

console.log(id);
console.log(id2);
clearTimeout(id)

console.log("Script end");