// Example 1
// let promise = new Promise(function (resolve, reject) {
//     const x = 4
//     const y = 4
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise
//     .then(function () {
//         console.log('Successfully executed');
//     })
//     .catch(function () {
//         console.log('Some error has occurred');
//     }); 



// Example 2
// let p = new Promise(function(resolve, reject) {
//     console.log("Hello");
//     resolve(56);
// })

// console.log("Hello One")
// setTimeout(function() {
//     console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello Three")
// console.log(p)


// Example 3
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds")
        resolve (20)
    }, 2000)
})


p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve("promise 2")}, 2000)
    })
    return p2
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value) => {
    console.log("Finally Done")
})


