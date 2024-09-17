// Asynchronous Ieration    

async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
  
(async () => {
for await (let value of asyncGenerator()) {
    console.log(value);
}
})();


// Rest/Spread Properties

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // { a: 1, b: 2, c: 3 }

const { a, ...rest } = obj;
console.log(rest); // { b: 2 }


// RegExp Enhancements:
// s (dotAll) flag for regular expressions, and y (sticky) flag improvements.

const regex = /foo.bar/s;
console.log(regex.test('foo\nbar')); // true