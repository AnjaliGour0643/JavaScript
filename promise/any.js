// Do not bother about any rejected promise
// finds all the success promises and return the resolved msg of the promise which was executed at the first 
// if all the rejected , it returns an aggregated error stating which promise is failed for what reason

const p1 = Promise.reject(0);
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const p3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));


const promises = [p1, p2, p3];

Promise.any(promises)
    .then((values) => {
        console.log(values)      // quick
    });


    
console.log("-----------------------")
// CASE: All promises reject

const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");

Promise.any([promise1, promise2]).catch(errors => {
    console.log(errors.errors); // ['Error 1', 'Error 2']
});

console.log("-----------------------")
// CASE: One promise resolves first

const pro1 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error'));
const pro2 = new Promise((resolve) => setTimeout(resolve, 300, 'Success'));

Promise.any([pro1, pro2]).then(result => {
    console.log(result); // 'Success'
});