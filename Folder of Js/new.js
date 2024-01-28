console.log("Script start !!!");

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Capturing
// child.addEventListener("click", ()=>{
//   console.log("Child Captured");
//   console.log("**********************");
// }, true)

// parent.addEventListener("click", ()=>{
//   console.log("Parent Captured");
// }, true)

// grandParent.addEventListener("click", ()=>{
//   console.log("Grandparent Captured");
// }, true)

// document.body.addEventListener("click", ()=>{
//   console.log("Body Captured");
// }, true)

// Bubbling
// child.addEventListener("click", ()=>{
//   console.log("Child Clicked 👶");
// })
// parent.addEventListener("click", ()=>{
//   console.log("Parent Clicked 💏");
// })
// grandParent.addEventListener("click", ()=>{
//   console.log("Grandparent Clicked 👴");
// })

// document.body.addEventListener("click", ()=>{
//   console.log("Body Clicked");
// })



// event delegation

grandParent.addEventListener("click", (e) =>{
  // console.dir(e.currentTarget);
  console.dir(e.target);
})