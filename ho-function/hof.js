// Normal Function Examples 
// -----------------------------

// function a(){
//     console.log("Hii");   // Hii
// }
// a();
// ------------------------------------

//-----> Passing String

// function a(b){
//     console.log(b);    // Hello
// }
// a('Hello');
// -------------------------------------

// -----> Passing Object

// function a(b){
//     console.log(b);     // {username: 'anjali', userage: 21}
// }
// a({username: 'anjali', userage: 21});
// -----------------------------------------

// -----> Mixed examples

// function a(b){
//     console.log(typeof a)      // function (internally object)
//     console.log(typeof b)      // Object
//     console.log(b);            // [1, 2, 3, 4]
// //    b()                         // b is not a function
// }
// a([1, 2, 3, 4]);
// console.dir(a)                 // [Function: a]  -> it prints the object in the object format(key : value pairs)
// console.dir('hi javascript')   // 'hi javascript'  -> this is not object(normal value primitive type)
// console.dir(897)               // 897  -> this is not object(normal value primitive type)
// -----------------------------------------
// -----------------------------------------

// -----> Sample Example 1 ----- passing a func to another function 

function a(b){
    console.log(b)    // (OR) console.dir(b)  -> [Function: whatsUp]
    b()               // 'Learning about higher order function'
}

function whatsUp(){
    console.log('Learning about higher order function')
}

a(whatsUp)

// you can store the function into a variable :-  const x = whatsUp  -> x() -> Learning about higher order function

// -----------------------------------------

// -----> Sample Example 2 ------- Anonymous function

// higher order function
// function a (b){
//     console.log(b)        // [Function (anonymous)]
//     b()                   // Keep it up
// }

// // in the below case function() is the callback function
// // and a() is the higher order function
// // Callback Function -> passing a func as an argument to another function while calling 
// a(function(){
//     console.log("Keep it up")
// })
// -------------------------------------------

// -----> Sample Example 3 ------- Anonymous function

// function outer(){
//     const a = 10
//     function x(){
//         const b = 5
//         return function(){
//             console.log(a + b)
//         }
//     }
//     return x;
// }
// const add = outer()

// console.log(add);




