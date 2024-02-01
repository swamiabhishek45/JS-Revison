function getAndAdd(num1, num2, onS, onF) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onS(num1, num2);
  } else {
    onF();
  }
}

function addTwoNums(num1, num2) {
  console.log(num1 + num2);
}

function onFail() {
  console.log("Wrong data type");
  console.log("Please pass numbers only");
}

getAndAdd(4, "f", addTwoNums, onFail);
