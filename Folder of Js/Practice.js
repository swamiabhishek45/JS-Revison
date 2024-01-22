const userMethods = {
    about(){
        return `${this.firstname} is ${this.age} years old`;
    },

    is18 : function () {
      return this.age >= 18;
    }, 
}


function createUser(firstname, lastName, age, email, address){
    const user = Object.create(userMethods);
    user.firstname = firstname;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;

    return user;
}


const user1 = createUser("Abhishek", "Swami", 21, "abhi@gmail.com", "Latur");
const user2 = createUser("Abhishek", "Swami", 21, "abhi@gmail.com", "Latur");
console.log(user1.about());


console.log(user1);
console.log(user2);



