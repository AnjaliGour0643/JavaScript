// 1. Object
let person = {
    name: "Alice",
    age: 28,
    isStudent: false
  };
  
console.log(person.name);   // "Alice"
console.log(person['age']); // 28


console.log("**************");


// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);     // "Apple"

let mixedArray = [1, "Hello", true];
console.log(mixedArray[2]); // true


console.log("**************");


// 3. Function
function greet(name) {
    return `Hello, ${name}!`;
  }
console.log(greet("John"));  // "Hello, John!"


// 4. Date
let currentDate = new Date();
console.log(currentDate);    // Output: Current date and time
