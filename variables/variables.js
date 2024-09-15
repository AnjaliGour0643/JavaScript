var name = "John";     // String
var age = 25;          // Number
var isStudent = true;  // Boolean

var age = 30;          // Re-declaring is allowed with var
console.log(age);      // Output: 30


console.log("**********");


let city = "New York";   // String
let score = 90;          // Number
let hasLicense = false;  // Boolean

// Re-declaring is NOT allowed
// let city = "Los Angeles"; // This would throw an error

console.log(city);       // Output: New York


console.log("**********");


const country = "India";   // String
const pi = 3.14159;        // Number
const isRaining = false;   // Boolean

// Reassignment is NOT allowed
// pi = 3.14;  // This would throw an error

console.log(isRaining);      // Output: false

console.log("------");

// Even though const prevents reassignment, it allows modification of the contents of arrays and objects.

const numbers = [1, 2, 3];
numbers.push(4);           // Modifying array is allowed
console.log(numbers);      // Output: [1, 2, 3, 4]

const person = {
  name: "Alice",
  age: 28
};
person.age = 29;           // Modifying object properties is allowed
console.log(person.age);   // Output: 29