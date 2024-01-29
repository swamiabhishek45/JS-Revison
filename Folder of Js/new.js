const body = document.querySelector("body")
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

function randomColorGenerator(){
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const yellow = Math.floor(Math.random() *256);

    const randomNum = `rgb(${red}, ${green}, ${yellow})`;

    return randomNum;
}

startBtn.addEventListener("click", () => {
  function color() {
    const random = randomColorGenerator();
    body.style.backgroundColor = random;
  }
  const id = setInterval(color, 1000);
});

stopBtn.addEventListener("click", () => {
 
    body.style.backgroundColor = "";
    clearInterval(id);
  
  
});