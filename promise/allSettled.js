// Returns the array of objects even if the promise is rejected of resoved

const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});
const promises = [p1, p2];

Promise.allSettled(promises)
    .then((results) => results.forEach((i) => 
        console.log(i.status)      // console.log(i.status, i.value, i.reason)));
    ));


// status -> state of promise
// value -> resolved
// reason -> rejected

// output :
// "fulfilled"
// "rejected"
    

console.log("-----------------------")
// CASE: Mixed resolved and rejected promises

const pro1 = Promise.resolve(10);
const pro2 = Promise.reject("Error occurred");
const pro3 = Promise.resolve(30);

Promise.allSettled([pro1, pro2, pro3])
    .then(results => {
        console.log(results);
});

// Output: 
// [
//   { status: 'fulfilled', value: 10 },
//   { status: 'rejected', reason: 'Error occurred' },
//   { status: 'fulfilled', value: 30 }
// ]


console.log("-----------------------")
// CASE: All promises resolved

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);

Promise.allSettled([p1, p2]).then(results => {
  console.log(results);
});

// Output :
// [
//   { status: 'fulfilled', value: 100 },
//   { status: 'fulfilled', value: 200 }
// ]
