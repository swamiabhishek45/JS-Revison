// // const userMethods = {
// //     about(){
// //         return `${this.firstname} is ${this.age} years old`;
// //     },

// //     is18 : function () {
// //       return this.age >= 18;
// //     }, 
// // }


// function createUser(firstname, lastName, age, email, address){
//     const user = Object.create(createUser.prototype);
//     user.firstname = firstname;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;

//     return user;
// }


// createUser.prototype.about = function(){
    
//     return `${this.firstname} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }

// const user1 = createUser("Abhishek", "Swami", 21, "abhi@gmail.com", "Latur");
// const user2 = createUser("Abhishek", "Swami", 21, "abhi@gmail.com", "Latur");
// console.log(user1.about());

// console.log(createUser.prototype);

// // console.log(user1);
// // console.log(user2);



function createUser(firstname, age){
    this.firstname = firstname;
    this.age = age;
}

createUser.prototype.about = function(){
    return `This person's name is ${this.firstname}` +
    ` and they are ${this.age} years old.`;
}

const user1 = new createUser('Abhishek', 21);

console.log(user1);