// const bucket = ["coffee", "chips", "vegetables", "rice"];

// const friedRicePromise = new Promise((resolve, reject) => {
//   if (
//     bucket.includes("salt") &&
//     bucket.includes("vegetables") &&
//     bucket.includes("rice")
//   ) {
//     resolve("Fried Rice");
//   } else {
//     reject(new Error("Something went wrong"));
//   }
// });

// // consume Promise

// friedRicePromise
//   .then(
//     // when promise resolve
//     (myFriedRice) => {
//       console.log("Lets eat", myFriedRice);
//     }
//   )
//   .catch((error) => {
//     console.log(error, "error message");
//   });

// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log("Original Array", arr);


// const pushed = arr.unshift(11)
// const poped = arr.shift();

// console.log("Pushed", pushed);
// console.log("poped", poped);

// console.log("New Array", arr);


const arr = [1,2,3,4,5,6,7,];
console.log(arr);

const newArr = [...arr];
console.log(newArr);

console.log(arr === newArr);


