/*
CLOSURE - a closure gives you access to an outer function's scope from an inner function


In JavaScript, every time a function is created, it keeps track of the variables and functions in its surrounding scope (the scope where the function was defined). 
This means that a function has access to variables that are declared in its outer scope (even after those outer functions finish executing), 
as well as its own local scope.
*/

// Lexical scope is closely related to closures. A closure is created when a function "remembers" its outer scope, 
// even after the outer function has finished executing.

let message = "Hello";
function buildGreeting() {
    console.log(message);    //Hello
    let audience = "World";

    function greetUser() {
    console.log(message + " " + audience);  // Hello World
    }

    greetUser();
}
// buildGreeting();

/**
 As a result of this local scoping, it also means that the greetUser() function is not available from the global scope. 
 However, it's interesting to note that we can access the greetUser() function through the buildGreeting() function.

To make the greetUser() function accessible from the global scope, 
you return the greetUser() function from within the buildGreeting() function. 
Then you assign the buildGreeting() function to a variable and call that variable like a function.
 */

function buildGreeting() {
    let message = "Hello";
    function greetUser() {
      console.log(message);
    }
    return greetUser;
}
let hello = buildGreeting();
hello();
     