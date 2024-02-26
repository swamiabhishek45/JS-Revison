const bucket = ["coffee", "chips", "vegetables", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("salt") &&
    bucket.includes("vegetables") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject(new Error("Something went wrong"));
  }
});

// consume Promise

friedRicePromise
  .then(
    // when promise resolve
    (myFriedRice) => {
      console.log("Lets eat", myFriedRice);
    }
  )
  .catch((error) => {
    console.log(error);
  });
