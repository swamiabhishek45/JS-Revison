const arr = [1, 2, 3, 4, 5];

const inVal = 0;

const ans = arr.reduce((acc, currVal) => acc + currVal, inVal);

console.log(ans);
