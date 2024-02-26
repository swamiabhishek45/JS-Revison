// // function returning promise

// const bucket = ["coffee", "vegetables", "salt", "cheese","rice" ];

// function ricePromise() {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
        
//         if (
//             bucket.includes("vegetables") &&
//             bucket.includes("salt") &&
//             bucket.includes("rice")
//             ) {
//                 resolve({ value: "Fried Rice" });
//             } else {
//                 reject("Could not find all ingredients");
//             }
//         }, 2000);
//   });
// }

// ricePromise().then((myRice) => {
//     console.log(myRice);
    
// }).catch((err) => {
// console.log("Error Message :",err);

// })

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("Abhishek ")
    })
}

myPromise().then((name) => {
    console.log(name);
    name += "Baswaraj"
    return name; // Promise.resolve(name)
}). then((name) => {
    console.log(name);
    name += " Swami"
    return name;
}). then((name) => {
console.log(name);
})