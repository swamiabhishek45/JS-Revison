// *****Predefined Functions*****
// alert('Error 404'); // To show alert Message
// confirm('Do you want to login'); // To show confirm message
// console.log('This was written in console.log'); // Debugging
// document.write('Hello, This is doucment.write function'); // Write something on document
// prompt('Enter your Name','This message was already here!');


// *****Put and Get Data from the HTML element*****
// document.getElementById('main').innerHTML = "<h1> Welcome To  JavaScript Page</h1>";
// document.getElementsByClassName('main')[1].innerHTML = "You can do it";


// *****String Concatenation*****
// var x = "Hello";
// var y = " World!";
// var z = x + y + " Its Me";
// alert(z);


// *****Operators in JS*****
// Ternary/Conditional Operator
// var x = 3;
// var y = 5;
// var z = x>y ? "True" : "False";
// console.log(z);
// document.getElementById('main').innerHTML = z;


// *****Functions in JS*****
// Calling User Defined Functions
// function greet() {
// alert("Your Search is done");
// var name = document.getElementById('name').value;
// alert(name);
// console.log(name);
// var string = "Hello " + name;
// document.getElementsByClassName('greet')[0].innerHTML = string; 
// alert(string);
// }


// Promt Function
// function call() {
//     var name = prompt("Enter your name!","");
//     document.getElementById('result').innerHTML = name;
// }


// *****Conditional Statements*****
// var age = 1;
// if (age >= 18) {
//     document.write('Yes, You can vote');
// } else if(age == 17) {
//     document.write('Please wait one more year');
// } else {
//     document.write('No, You can not vote')
// }


// *****Array in JS*****
// var house = new Array(23,45,23,43);
// var cars = ["Farari", "Range Rover", "TATA", "BMW", "Mercedes"];
// cars[5] = "Baleno" 
// document.write(cars[3]);


// *****Loops in JS*****
// for (var count = 10; count >= -5; count--) {
//     document.write(count + "<br>");
// }
// document.write('Loop Ended');

// var count = 0;
// while(count <= 10){
//     document.write(count + '<br>')
//     count++;
// }

// var cars = ["Farari", "Range Rover", "TATA", "BMW", "Mercedes"];
// cars.forEach(car);
// function car(item,index,arr){
//     arr[index] = item + " 8";
// }
// cars.forEach(after);
// function after(item, index) {
//     document.write(index + " => " + item + "<br>");
// }


// *****Continue, break & switch Statement*****
// for(var i = 0; i <= 10; i++){
//     if(i%2 != 0){
//         continue;
//         // break;
//     }
//     document.write(i + "<br>");
// }

// var i = 3;
// switch(i){
//     case 1:
//         document.write("i is equal to 1");
//         break;
//     case 2:
//         document.write("i is equal to 2");
//         break;
//     case 3:
//         document.write("i is equal to 3");
//         break;
//     case 4:
//         document.write("i is equal to 4");
//         break;
//     case 5:
//         document.write("i is equal to 5");
//         break;
//     default:
//     document.write("Invalid Number (i)");
// }
// document.write("Out of switch");


// *****Array Methods*******************************************
// var arr = ['Mango', 'Apple', 'Papaya', 'Banana'];
// var arr2 = ['Potato','Ginger'];
// console.log(Array.isArray(arr));
// console.log(arr.valueOf());
// console.log(arr.join("|"));
// console.log(arr.concat(arr2));
// console.log(arr.indexOf('Banana'));

// console.log(arr);
// function pop() {
//     arr.pop();
//     console.log(arr);
// }
// function push() {
//     var x =  prompt("Enter Your fruit");
//     arr.push(x)
//     console.log(arr);
// }
// function reverse() {
//     arr.reverse();
//     console.log(arr);
// }
// function shift() {
//     arr.shift();
//     console.log(arr);
// }
// function slice() {
//     var x = arr.slice(2);
//     console.log(x);
// }


// *****Date Methods in JS*****
// var date = new Date();
// function getDate() {
//     document.getElementById('res').innerText = date;
// }
// function getYear() {
//     document.getElementById('res').innerText = date.getFullYear();
// }
// function getMonth() {
//     var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     document.getElementById('res').innerText = month[date.getMonth()];
// }
// function getTime() {
//     document.getElementById('res').innerText = date.getTime();
// }


// TypeOf Operator
// var a = 10;
// console.log(typeof(a)); 

// var b = "Hello World!"
// console.log(typeof(b)); 

// var c = true;
// console.log(typeof(c)); 

// var arr = ['1','2','3'];
// console.log(typeof(arr)); 



// function getName() {
//     var uname = document.getElementsByName('name')[0].value;
//     document.getElementsByName('name')[0].value = "";
//     document.getElementsByTagName('h1')[0].innerHTML = uname; 
// }


// *****setInterval & setTimeOut in JS*****
// function test() {
//     setInterval(
//         function () {
//             alert("Hello!");
//         },
//         3000
//     );
// }

// function test2() {
//     setTimeout(
//         function () {
//             document.write('Game Over');
//         },
//         3000
//     );
// }


// *****clearInterval & clearTimeOut in JS*****
// var my = setInterval(count, 1000);
// var c = 0;
// function count() {
//     document.getElementById('h1').innerHTML = c;
//     c++;
// }
// function stop() {
//     clearInterval(my);
// }

// var my;
// function start() {
//     my = setTimeout(function () {
//         document.write("Start the Game");
//     }, 5000
//     );
// }
// function stop() {
//     clearTimeout(my);
// }


// ***********Modify CSS using JS******************
// function modify() {
//     document.getElementById('main').style.fontSize = '50px';
//     document.getElementById('main').style.color = 'blue';
// }
// function unmodify() {
//     document.getElementById('main').style.fontSize = '30px';
//     document.getElementById('main').style.color = 'red';
// }


// var win;
// function openwin() {
//     win = window.open("https://www.wscubetech.com","width = 500px", "height=500px");
// }

// function closewin() {
//     win.close();
// }


// var c = window.history.length;
// document.getElementsByTagName('h1')[0].innerText = c;


// *****this keyword in JS**************
// var person = {
//     firstName : 'Abhishek',
//     lastName : ' Swami',
//     fullName : function() {
//         return this.firstName + this.lastName;
//     }
// };
// document.write(person.fullName());

// function remove(elem) {
//     elem.style.display = 'none';
// }


// *******Events in JS***********************
// var i = 0;
// document.getElementById('btn').addEventListener('click', counter);
//  function counter(){
//     document.getElementById('counter').innerText = i;
//     i++;
// }

// document.getElementById('btn').addEventListener('mouseenter',changeColor);
// function changeColor() {
//     document.getElementById('counter').style.color = 'red';
// }
// document.getElementById('btn').addEventListener('mouseleave',Color);
// function Color() {
//     document.getElementById('counter').style.color = 'green';
// }

// function stop() {
//     document.getElementById('btn').removeEventListener('click',counter);
// }


// function printPage() {
//     var body = document.getElementById('body').innerHTML;
//     var data = document.getElementById('data').innerHTML;
//     document.getElementById('body').innerHTML = data;
//     window.print();
//     document.getElementById('body').innerHTML = body;
// }


// function val(elem) {
//     document.getElementById('res').style.color = 'red';
//     if (isNaN(elem.value)) {   // Nan = Not a Nnumber
//         document.getElementById('res').innerText = "Please enter numbers only";
//     } else {
//         document.getElementById('res').innerText = "";
//         if (elem.value.length >= 10) {
//             document.getElementById('res').innerText = "Please enter only ten digits";
//         } else {
//             document.getElementById('res').innerText = "";
//         }
//     }
// }


// var num = prompt("Please Enter a Number","");
// for(i = 1; i <= 10; i++) {
//     document.write('<div>');
//     document.write(num + " x " + i + " = " + i*num);
//     // document.write(i*num);
//     document.write('</div>');
// }


// var rows = prompt("Enter number of rows","");
// printPattern(rows);
// function printPattern(rows) {
//     for (var i = 1; i <= rows; i++){
//         for (var j = 1; j <= i; j++) {
//             document.write('*');
//         }
//         document.write("<br>");
//     }
//     for (var i = rows - 1; i >= 1; i--){
//         for (var j = 1; j <= i; j++) {
//             document.write('*');
//         }
//         document.write("<br>");
//     }
// }


function move() {
   var redElem =  document.getElementsByClassName('red')[0];
    var poe = 0;
    var anim = setInterval(animate, 5);

    function animate() {
        if (poe == 350){
           clearInterval(anim);
        } else {

            poe++;
            redElem.style.top = poe + "px";
            redElem.style.left = poe + "px";
        }
    }
}