// 1. Object
let person = {
    name: "Alice",
    age: 28,
    isStudent: false
  };
  
console.log(person.name);   // Output: "Alice"
console.log(person['age']); // Output: 28


console.log("**************");


// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);     // Output: "Apple"

let mixedArray = [1, "Hello", true];
console.log(mixedArray[2]); // Output: true


console.log("**************");


// 3. Function
function greet(name) {
    return `Hello, ${name}!`;
  }
console.log(greet("John"));  // Output: "Hello, John!"

