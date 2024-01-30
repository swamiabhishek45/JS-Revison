// Promise.resolve

const myPromise = Promise.resolve(5);
myPromise.then((val) => {
  console.log(val);
});

// then() method always returns Promise

function promiseHai() {
  return new Promise((resolve, reject) => {
    // resolve("I");
  });
}

promiseHai()
  .then((val) => {
    console.log(val);
    val += " Love";
    return val;
  })
  .then((val) => {
    console.log(val);
    val += " Coding";
    return val;
  })
  .then((val) => {
    console.log(val);
  });
