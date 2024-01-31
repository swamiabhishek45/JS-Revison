
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();


xhr.open('GET', URL);
console.log(xhr.readyState);
console.log(xhr.readyState);

xhr.onload = function () {
  const response = xhr.response; // string
  const data = JSON.parse(response);
  console.log(data); // object
};



xhr.send();