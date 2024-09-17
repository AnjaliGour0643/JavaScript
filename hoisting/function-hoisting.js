let message = "Hello";
function buildGreeting() {
  console.log(message);        // Hello
  let audience = "World";
  function greetUser() {
    console.log(message + " " + audience);  //Hello World
  }
  greetUser();
}
buildGreeting();
   

// -----------------------------------------------------------
// Function Declaration Hoisting
// -----------------------------------------------------------
console.log();

// Calling the function before its declaration
sayHello();

function sayHello() {
  console.log("Hello, I am hoisted!");
}

// -----------------------------------------------------------
// Function Expression Hoisting
// -----------------------------------------------------------
console.log();

try {
    // Trying to call the function expression before declaration
    greet(); // Error: greet is not a function
} 
catch (error) {
    console.log(error.message); // This will catch the error
}
  
  // Function Expression
var greet = function () {
console.log("Hi, I am not hoisted in the same way!");
};

greet();  // valid call, no error


/*
Function Declarations are fully hoisted, meaning you can call the function before its definition.
Function Expressions are only partially hoisted. The variable is hoisted, but the function assignment is not. 
Trying to call it before assignment leads to errors.
When using let or const for function expressions, accessing them before the declaration results in a ReferenceError due to the temporal dead zone.


With var, you get undefined before initialization, leading to a TypeError (greet is not a function).
With let or const, accessing the variable before initialization results in a ReferenceError due to the temporal dead zone (TDZ).
 */
  