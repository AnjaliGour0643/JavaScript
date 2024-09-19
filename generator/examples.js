/**
 * A generator in JavaScript is a special type of function that can pause and resume its execution.
 * Syntax:       A generator function is declared using function* (an asterisk after function).
 * Yield:        Inside a generator, the yield keyword is used to pause the function and return a value.
 * Iterators:    Generators return an iterator object, which allows you to call next() to get the next value from the generator.
 * Pausing and Resuming:  When you call next(), it resumes the function from where it last paused (from the last yield).

                    Gererators                                                          Arrays         
1. Memory-efficient: values are produced on demand                  1. Memory-intensive: stores all values in memory
2. Lazy evaluation: values are computed when needed                 2. Eager evaluation: all values are computed upfront
3. Can handle infinite or very large sequences                      3. Limited by available memory
4. Faster for generating large or infinite sequences                4. Defined using brackets [] and filled directly
5. Cannot be mutated like arrays, only generates values             5.  Can be directly modified (e.g., push, pop)
6. Can pause and resume with yield and next()                       6. Iteration happens completely once started
7. Best for streaming or lazy evaluation of data                    7. Best for static collections of data
8. 	Returns an iterator object                                      8. Returns an array object
*/


// Example 1----------------------------

function* numbersGen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const gen = numbersGen();
console.log(gen.next());  // returns object with value
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// Example 2
console.log("--------------------------------")

function* numGen(){
    let i = 0;
    while(true){
        yield (i++);
        yield (i++);
    }
}
const genr = numGen();
console.log(genr.next());  // returns object with value
console.log(genr.next());


// Example 3
console.log("--------------------------------")

function* numbGen(){
    let i = 0;
    while(true){
        yield (i++).toString();  
        yield (i++).toString();
    }
}
const genrt = numbGen();
console.log(genrt.next());  // returns object with string value
console.log(genrt.next());


// Example 4
console.log("--------------------------------")

function* numbrGen(){
    let i = 0;
    while(true){
        yield (i++).toString();  
        yield (i++).toString();
    }
}
const genrtr = numbrGen();
console.log(genrtr.next().value);  // returns object's value
console.log(genrtr.next().value);


// Example 5 
console.log("--------------------------------")
// In this case, the generator runs infinitely, but values are only calculated when next() is called, making it efficient.

function* infiniteGenerator() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  const infinite = infiniteGenerator();
  console.log(infinite.next().value); // 0
  console.log(infinite.next().value); // 1
  console.log(infinite.next().value); // 2
