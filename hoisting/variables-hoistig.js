// accessing a variable before initializing it
// Declaration goes to the top of the scope


// Global Scope (Outside function)
var globalVar = "I am a var in global scope";
let globalLet = "I am a let in global scope";
const globalConst = "I am a const in global scope";

function myFunction() {
    // Function Scope (Inside function)
    var localVar = "I am a var in function scope";
    let localLet = "I am a let in function scope";
    const localConst = "I am a const in function scope";

    console.log("--- Inside Function ---");

    // Accessing global variables
    console.log(globalVar);   
    console.log(globalLet);   
    console.log(globalConst); 

    // Accessing local variables
    console.log(localVar);   
    console.log(localLet);   
    console.log(localConst); 

    // Updating global variables inside the function
    globalVar = "Updated global var inside function";
    globalLet = "Updated global let inside function";
    localLet = "Updated local let inside function";

    // Attempt to update const will throw an error
    // globalConst = "Updated global const"; // Error! Cannot update const

    // Accessing global variables after update
    console.log(globalVar);   
    console.log(globalLet);   
    console.log(localLet);    
}

myFunction();

console.log("--- Outside Function ---");

// Accessing global variables outside the function
console.log(globalVar);   
console.log(globalLet);   
console.log(globalConst); 

// Accessing local variables outside the function (This will throw errors)
try {
  console.log(localVar);   // Error! localVar is not defined outside the function
} catch (e) {
  console.log(e.message);  // localVar is not defined
}

try {
  console.log(localLet);   // Error! localLet is not defined outside the function
} catch (e) {
  console.log(e.message);  // localLet is not defined
}

try {
  console.log(localConst); // Error! localConst is not defined outside the function
} catch (e) {
  console.log(e.message);  // localConst is not defined
}

// Attempting to access variables before they are defined in the function
function hoistingExample() {
    console.log("--- Hoisting Example ---");

    // This will show `undefined` due to var hoisting
    console.log(hoistedVar); // undefined (because var is hoisted but not initialized)

    // This will throw an error because let/const are in the Temporal Dead Zone (TDZ)
    try {
    console.log(hoistedLet); // Error! Cannot access 'hoistedLet' before initialization
    } 
    catch (e) {
    console.log(e.message);
    }

    try {
    console.log(hoistedConst); // Error! Cannot access 'hoistedConst' before initialization
    } 
    catch (e) {
    console.log(e.message);
    }

    // Declare variables after trying to access them
    var hoistedVar = "I am a hoisted var";
    let hoistedLet = "I am a hoisted let";
    const hoistedConst = "I am a hoisted const";

    // Accessing after declaration
    console.log(hoistedVar);   // Accessible (hoisted var)
    console.log(hoistedLet);   // Accessible (hoisted let)
    console.log(hoistedConst); // Accessible (hoisted const)
}

hoistingExample();
