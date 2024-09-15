// setTimeout : delay task for the specified time 
// Syntax : let timerId = setTimeout(function, <delay(in ms)>, <arg1>, <arg2>)
//          (returns a timer ID)     

// Example 1
console.log("Start");                             // Start
                                                  // End
setTimeout(function () {                          // Inside setTimeout(after 2 seconds)
  console.log("Inside setTimeout");
}, 2000);

console.log("End");


console.log("--------------")


// Example 2
let a = setTimeout(function () {
    console.log("Inside setTimeout Eg 2")
}, 5000);
console.log(a);


// Exampple 3
let ac = setTimeout(function () {
    console.log("Inside setTimeout Eg 3")
}, 5000);
clearTimeout(ac)    // stop the execution of setTimeout
console.log(ac);

console.log("*************");


// Example 4
const sum = (a, b, c) => {
    console.log("sum of these numbers is: " + (a+b+c));
}
setTimeout(sum, 3000, 1, 2, 7);


