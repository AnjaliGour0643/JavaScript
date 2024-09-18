// Immediately Invoked Function Expression
/*
Why Use IIFE?
Encapsulation: Variables declared inside an IIFE are private to that function.
Avoid Global Scope Pollution: Helps to avoid conflicts with variables or functions in the global scope, especially in large codebases.
Initialization: IIFE is useful for code that runs once and doesn't need to maintain state afterward.
*/

// Normal function call-------------
function a(){
    console.log("hii")
}
a()

// //  Example 1: Basic IIFE
;(function (){
    console.log("hello")
})()


// Example 2: IIFE with Parameters
;(function(a, b) {
    console.log("Sum:", a + b);
})(5, 3);  //  Sum: 8


// Example 3: IIFE to Create Private Variables
let result = (function() {
    let privateVar = "I am private";
    return privateVar;
})();
console.log(result);  // I am private


// Example 4: IIFE in Loops (Avoiding Global Variables)
for (var i = 0; i < 3; i++) {
    (function(x) {
      console.log(x);
    })(i);
}
  // Output: 0, 1, 2


// In non-modular JavaScript environments, you can't use await outside an async function.
// An async IIFE provides a way to handle async operations at the top level.
(async function() {
    const fetchData = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });

    const result = await fetchData;
    console.log(result);  // Output after 2 seconds: Data fetched!
})();
  