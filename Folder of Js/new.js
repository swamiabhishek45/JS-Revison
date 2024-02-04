// singleton

// object literals

const mysym = Symbol();

const user = {
  [mysym]: 1,
  name: "Abhishek",
  age: 21,
  location: "Latur",
  email: "abhi@gmail.com",
  isLoggedIn: false,
  lastLOgindays: ["Monday", "Sunday"],
  greet: () =>{
    return "Inside OBJ";
    
  }
};

console.log(typeof user[mysym]);

console.log(user.name);
console.log(user["age"]);

console.log(user);

user.id = 34;

console.log(user.id);

console.log(user.greet());

user.greet = () =>{
    console.log("Hello Js");
    
}


user.greet();

