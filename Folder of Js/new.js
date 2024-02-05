// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ans = myNums.filter((num) => {
//   return num >= 5;
// });
// const ans3 = [];
// myNums.forEach((num) => {
//     if (num >= 5) {
//         ans3.push(num);
        
//     }
// });

// console.log(ans);
// console.log(ans3);

// const ans2 = myNums.every((num) => num >= 5);
// console.log(ans2);


const books = [

    {title: "Book One", genre: "Fiction", publish: 1998, edition: 2001},
    {title: "Book Two", genre: "History", publish: 1957, edition: 1990},
    {title: "Book Three", genre: "Fiction", publish: 2004, edition: 2011},
    {title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2019},
    {title: "Book Five", genre: "History", publish: 1856, edition: 1956},
    {title: "Book Six", genre: "Science", publish: 2000, edition: 2009},
];

let userBooks = books.filter( (bk) => bk.publish === 2000)
console.log(userBooks);

userBooks = books.filter( (bk) => bk.edition >= 2000 && bk.genre === "Fiction")
console.log(userBooks);

