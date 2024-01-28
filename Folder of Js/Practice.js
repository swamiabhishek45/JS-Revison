const body = document.querySelector("body");

// body.addEventListener("keypress", (e) =>{
//     console.log(e.key);
// })

const btn = document.querySelector("button");

btn.addEventListener("mouseover", (e) =>{
    console.log("Mouse over event occur");
})
btn.addEventListener("mouseleave", (e) =>{
    console.log("Mouse leave event occur");
})