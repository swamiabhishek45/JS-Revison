const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("salt") &&
    bucket.includes("vegetables") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject("Coudn't do it")
  }
});

// consume Promise

friedRicePromise.then((myFriedRice) => {
    console.log("Lets eat", myFriedRice);
    
})