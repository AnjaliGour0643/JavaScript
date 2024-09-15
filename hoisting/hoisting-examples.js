// Hoisting : In JavaScript, hoisting is the process where variable and function declarations are moved to the top of 
// their scope before the code is executed.
// (var, functions, class Definition are hoisted at top)
// Iinitialization is not hoisted


// Example 1
console.log(a);  // Output : Undefined (as during hoisting only the declaration appears at the top not the definition)
var a = 10;


// Example 2
greet();      // Good morning
function greet(){
    console.log("Good morning");
}


// Example 3
// study();  // ReferenceError: Cannot access 'study' before initialization
const study = () => {
    console.log("Hi Anjali, how is learning going?");
}
study();  // it will work here 


// Example 4
learning(); // Error
var learning = () => {
    console.log("It's going well");
}
/*
// Explanation
var learning;  // Declaration hoisted (initialized with undefined)

learning();    // Trying to call undefined here, which causes a TypeError

learning = () => {   // Arrow function assignment happens later
    console.log("It's going well");
};
*/