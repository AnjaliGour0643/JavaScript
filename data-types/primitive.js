// 1. Number
let age = 25;             // Integer
let pi = 3.14159;         // Floating-point
let negative = -42;       // Negative number
let notANumber = NaN;     // Special value for 'Not a Number'


// 2. String
let firstName = "John";          // Double quotes
let greeting = 'Hello, world!';  // Single quotes


// 3. Boolean 
let isStudent = true;
let hasLicense = false;
let isAdult = age > 18;     // Boolean expression


// 4. Null 
let car = null;   // No value (intentional)


// 5. Undefined
let job;
console.log(job);  // undefined (because it’s not initialized)


// 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // 'n' denotes BigInt
let anotherBigNumber = BigInt(1234567890123456789);
console.log(anotherBigNumber);


// 7. Symbol
let id = Symbol('id');
let anotherId = Symbol('id');  // Each symbol is unique, even with the same description
console.log(id === anotherId); // false