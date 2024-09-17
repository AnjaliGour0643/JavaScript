// 1. Array.prototype.flat/flatMap:
// Methods to flatten arrays and map over nested arrays.

const arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // [1, 2, 3, 4]
console.log(arr.flatMap(x => x * 2)); // [2, 4, [6, 8]]


// 2. Object.fromEntries:
// Convert a list of key-value pairs into an object.

const entries = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(entries);
console.log(obj); // { a: 1, b: 2 }


// 3. String.prototype.trimStart/trimEnd:
// Methods to trim whitespace from the start or end of a string.

const str = '   Hello   ';
console.log(str.trimStart()); // 'Hello   '
console.log(str.trimEnd());   // '   Hello'


// 4. Symbol.prototype.description:
// Retrieve the description of a Symbol.

const sym = Symbol('description');
console.log(sym.description); // 'description'


// 5. Try/Catch Improvements:
// Optional catch binding in try/catch statements.

try {
    // code that might throw an error    
} catch {
    // handle error
}
  