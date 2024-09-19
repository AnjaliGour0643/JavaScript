/* 
First scenario - when all the tasks are dependent on each other and you want to proceed further only when all are success
Second scenario - if any of the rejection is happened, you want to come out 
*/


// CASE 1 : all promises are resolved
// output : return an array with resolved values

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise2, promise1, promise3])
    .then((values) => {
        console.log(values)      // [ 42, 3, 'foo' ]
    });


console.log("-------------------------------")
// CASE 2 : any one promise is rejected
// output : stops the execution there only and returns the reject message 
//             it do not return the previous resolved values , stops , and do not check any further promises

const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 3000);
});

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 2000);
});

Promise.all([pro1, pro2, pro3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);     // rejected
    })


