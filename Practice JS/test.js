const book = {
    title: "Char Bazar",
    author: "Suresh Kamath",
    year: 2034,
    getYear: function(){
        return this.year;
    },
}

console.log(Object.keys(book)); // returns an array of keys.

console.log(Object.values(book)); // returns an array of values.

console.log(Object.entries(book)); // returns an array of [key, value] pairs.