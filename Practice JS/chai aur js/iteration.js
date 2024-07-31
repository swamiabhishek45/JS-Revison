// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {

//     item += "hi"
// })

// // console.log(values);

// console.log(coding);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter
const ans = myNums.filter((num) => {
    return num > 5;
});

// console.log(ans);

// Using forEach
const newArr = [];

myNums.forEach((num) => {
    if (num > 5) {
        newArr.push(num);
    }
});

// console.log(newArr);

const books = [
    { title: "book 1", genre: "fiction", publish: 2009, edition: 2011 },
    { title: "book 2", genre: "science", publish: 2002, edition: 2004 },
    { title: "book 3", genre: "spritual", publish: 2012, edition: 2017 },
    { title: "book 4", genre: "history", publish: 2016, edition: 2023 },
    { title: "book 5", genre: "fiction", publish: 2000, edition: 2024 },
];

const userBooks = books.filter((book) => book.genre === "history");

// console.log(userBooks);

const {4:b} = [1, 2, 3, 4, 5, 6];
console.log(b);