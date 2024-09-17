// Create an array of numbers
let numbers = [34, 7, 23, 32, 5, 62, 45, 2];

// 1. Numeric Sort - Sorts the array numerically in ascending order
numbers.sort((a, b) => a - b);
console.log("Numerically sorted (ascending):", numbers);

// 2. Numeric Sort - Sorts the array numerically in descending order
numbers.sort((a, b) => b - a);
console.log("Numerically sorted (descending):", numbers);

// 3. Random Sort - Shuffles the array randomly
numbers.sort(() => Math.random() - 0.5);
console.log("Randomly sorted:", numbers);

// 4. Math.min() - Finds the minimum value in the array
let minValue = Math.min(...numbers);
console.log("Minimum value using Math.min():", minValue);

// 5. Math.max() - Finds the maximum value in the array
let maxValue = Math.max(...numbers);
console.log("Maximum value using Math.max():", maxValue);

// 6. Home made Min - Custom function to find the minimum value in an array
function homemadeMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log("Minimum value using homemadeMin():", homemadeMin(numbers));

// 7. Home made Max - Custom function to find the maximum value in an array
function homemadeMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Maximum value using homemadeMax():", homemadeMax(numbers));
