studying();  // while function declaration you can call a function before it is defined
function studying(){
    console.log("Learning about function declaration")
}


console.log("--------------");


function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // 8


console.log("--------------");


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));  // 120

console.log();
console.log("************************************");
console.log();


let printing = function(){       // function expression cannot be called before it is defined
    console.log("Learning about function expression")
}
printing();


console.log("--------------");


const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2, 3));  // 6