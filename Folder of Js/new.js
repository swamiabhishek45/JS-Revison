const bucket = ["rice", "salst", "coffee", "vadapav", "vegetables"];

function ricePromise(){
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        const value = false;

        if(value){
            resolve({value: "Fried Rice"})
        }else {
            reject("Couldn't do it");
        }
    }, 2000);
   })
}

ricePromise().then((friedRice) =>{
    console.log(friedRice);
}).catch((error)=>{
    console.log(error);
})
