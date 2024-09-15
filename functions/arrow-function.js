const greet = (name, age) => `Hello ${name}, your age is ${age}`;
const output = greet('Anjali', 21);
console.log(output);


console.log("--------------");


// long way of writing arrow function
const sayHi = (name) => {
    return `Hi, ${name}!`
}
const op = sayHi('Alex');
console.log(op);  // Hi, Alex!


const sayHello = (name) => `Hello, ${name}!`;
console.log(sayHello("Alex"));  // Hello, Alex!


console.log("--------------");


const add = (a, b) => a + b;
console.log(add(3, 7));  // 10


console.log("--------------");


const isPositive = number => number > 0;
console.log(isPositive(10));  // true
console.log(isPositive(-5));  // false


console.log("--------------");


const square = x => x * x;
console.log(square(6));  // 36