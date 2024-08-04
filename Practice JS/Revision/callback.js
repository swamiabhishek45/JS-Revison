// callbacks, callback hell, pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

setTimeout(() => {
    heading1.style.backgroundColor = "red";
    setTimeout(() => {
        heading2.style.backgroundColor = "green";
        setTimeout(() => {
            heading3.style.backgroundColor = "blue";
            setTimeout(() => {
                heading4.style.backgroundColor = "yellow";
                setTimeout(() => {
                    heading5.style.backgroundColor = "orange";
                    setTimeout(() => {
                        heading6.style.backgroundColor = "purple";
                        setTimeout(() => {
                            heading7.style.backgroundColor = "skyblue";
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
