const key1 = "obj1";
const key2 = "obj2";

const obj1 = {
    key: "val1"
}

const obj2 = {
    key1: "val2"
}

const cloneObj = {...obj1, ...obj2};

console.log(cloneObj);

const arr1 = [1,2,34,4];
const arr2 = [1,'hi', 4,3,2];

console.log([...arr1, ...arr2]);