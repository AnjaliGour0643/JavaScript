/**
At the core of JavaScript’s architecture is the JavaScript Engine, which is responsible for executing the code. 
Each browser (like Chrome, Firefox, or Safari) has its own JavaScript engine:

V8 Engine (used by Chrome and Node.js)
SpiderMonkey (used by Firefox)
JavaScriptCore (used by Safari)
A JavaScript engine typically has two main components:

Memory Heap: Where memory allocation happens.
Call Stack: Where the code is executed and functions are called.
 */

// Example of a Call Stack:
function first() {
    second();
    console.log("First function");
}
  
function second() {
console.log("Second function");
}
  
first();


/**
Explanation:
1. When the first() function is called, it goes onto the call stack.
2. Inside first(), the second() function is called, so it gets added to the call stack.
3. The second() function executes, and it logs "Second function" to the console. After that, second() is removed from the call stack.
4. The code returns to the first() function, where it logs "First function" to the console.
5. Finally, first() is removed from the call stack.
 */