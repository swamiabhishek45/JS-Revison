import { firstName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import Person, {Person2} from "./utils/Person.js";

console.log(firstName, age);

const person = new Person("Abhishek", "Swami", 21);
console.log(person);
person.info();