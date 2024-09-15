/*
Variables declared inside a function are in the local scope of that function.
These variables are only accessible within the function and not outside of it.
Function parameters are also considered local to the function.
 */

function localScopeExample() {
    let localVar = "I am local";  // Local scope
    console.log(localVar);  // Accessible here
}

localScopeExample();  // I am local

console.log(localVar);  // Error: localVar is not defined (not accessible outside the function)