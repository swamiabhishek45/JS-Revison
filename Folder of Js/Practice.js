
const myVar = "valu 0"
function myApp(){
    // const myVar = "Value 1";

    function myFunc1(){
        // const myVar = "val 23";
        console.log('inside myFunc', myVar);
    }
    console.log(myVar);
    myFunc1();
}

myApp();
myFunc1();