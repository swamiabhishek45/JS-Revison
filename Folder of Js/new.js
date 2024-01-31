const URL = "https://jsonplaceholder.typicode.com/posts";
console.log("Script start");
// 3. ) Async / Await

// fetch(URL)
//   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
    //     console.log(data);
    //   });

const getData = async () => {
  const response = await fetch(URL);
  if(!response.ok){
    throw new Error("Something went wrong")
  }
  const data = await response.json();
  console.log(data);
  console.log(response);
};

getData();
console.log("Script end");