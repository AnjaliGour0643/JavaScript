// First fulfillment of the promise is returned even if it is resolved or it is returned

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

Promise.race([p1, p2])
    .then((value) => {
        console.log(value);
    });
    

// Output : 'two'
