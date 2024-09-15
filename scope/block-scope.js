/**
 * Variables declared with let or const inside a block ({}) are confined to that block.
 * Block scope exists in loops, if statements, and other block structures.
 * Variables declared with var are not block-scoped (they are function-scoped).
 */

if (true) {
    let blockScopedVar = "I am block-scoped";
    console.log(blockScopedVar);  // Accessible here
}
console.log(blockScopedVar);  // Error: blockScopedVar is not defined (outside block)


console.log("-------------------------------")


// Example with 'var' 
// if (true) {
//     var notBlockScoped = "I am not block-scoped";
// }
// console.log(notBlockScoped);  // I am not block-scoped (accessible outside block)