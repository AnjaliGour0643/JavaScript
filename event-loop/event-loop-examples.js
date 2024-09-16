/** 
 setTimeout : delay task for the specified time 
 Syntax : let timerId = setTimeout(function, <delay(in ms)>, <arg1>, <arg2>)
          (returns a timer ID)    (callback function)

callback function hamesha asynchronous code ke answer aane pr chalta hai

Event loop ka kaam hota hai side stack se main stack  me cheeze lana.
Jab main stack empty hota hai tb eventloop side stack se puchega, kya kaam hoo gaya hai
agr haan, toh usey main stack me lekar aayega for execution.
*/


// Example 1
console.log("Hey");             // sync
console.log("Hey 2");           // sync
console.log("Hey 3");           // sync
setTimeout(function(){          // async (executes when the MS is empty)
    console.log("Hey 4 (Asynchronous)");
}, 0);
console.log("Hey 5");           // sync


// Example 2
console.log("Start");           // sync           // Start
                                                  // End
setTimeout(function () {                          // Inside setTimeout(after 2 seconds)
  console.log("Inside setTimeout");
}, 2000);

console.log("End");                      // sync


console.log("--------------")           // sync


// Example 3
let a = setTimeout(function () {
    console.log("Inside setTimeout Eg 3")
}, 5000);                                         // Async (executes after 5 sec)
console.log(a);


// Example 4
let ac = setTimeout(function () {
    console.log("Inside setTimeout Eg 4")
}, 4000);
clearTimeout(ac)    // stop the execution of setTimeout
console.log(ac);


console.log("*************");           // sync


// Example 5
const sum = (a, b, c) => {
    console.log("sum of these numbers is: " + (a+b+c));
}
setTimeout(sum, 3000, 1, 2, 7);                     // Async (executes after 3 sec)


