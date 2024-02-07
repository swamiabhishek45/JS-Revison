const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}



// const title = book.title
// const author = book.author
const book = getBook(2);

const {title, author} = book;
author 
title

const newBook = {
    id: 6,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling'
}

const booksAfteradd = [...book, newBook];
console.log('booksAfteradd : ', booksAfteradd);
