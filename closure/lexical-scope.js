/*
Lexical scope (also known as static scope) refers to the way variable scope is determined by the physical placement of the code (lexically) when it is written. 
In simpler terms, it means that a function's scope is determined by where it is defined, not where it is called. 
This makes it different from dynamic scope, where scope depends on where a function is called from.
*/ 

function outerFunction() {
    
    var outerVar = "I am from the outer scope";
  
    function innerFunction() {
      var innerVar = "I am from the inner scope";
      console.log(outerVar); // Can access outer scope variables
      console.log(innerVar); // Can access inner scope variables
    }
  
    innerFunction(); // Calling the inner function
}
  
outerFunction();