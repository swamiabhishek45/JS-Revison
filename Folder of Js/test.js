async function getRandomUser(){
    // fetch("https://randomuser.me/api")
    // .then((raw) =>{// get raw data
    //     console.log(raw);
    //     return raw.json(); // Convert into readable format
    // })
    // .then((data) => { // get real data
    //     console.log(data);
    // })


    let raw = await fetch("https://randomuser.me/api");
    let data = await raw.json();
    console.log(raw);
    console.log(data);
    
}

getRandomUser();