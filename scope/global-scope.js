// Variables declared outside of any function or block are in the global scope.
// Global variables are accessible from anywhere in your code.

let globalVar = "I am global";  // Global scope

function showGlobalVar() {
    console.log(globalVar);  // Accessible here
}

showGlobalVar();  // I am global
console.log(globalVar);  // I am global