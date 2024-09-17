// Create a simple array of fruits
let fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Grapes"];

// 1. Array sort() - Sorts the array alphabetically
fruits.sort();
console.log("Sorted fruits:", fruits);

// 2. Array reverse() - Reverses the sorted array
fruits.reverse();
console.log("Reversed sorted fruits:", fruits);

// 3. Array toSorted() - Creates a new sorted array (ES2023, non-destructive)
let sortedFruits = fruits.toSorted();
console.log("Fruits after toSorted():", sortedFruits);

// 4. Array toReversed() - Creates a new reversed array (ES2023, non-destructive)
let reversedFruits = sortedFruits.toReversed();
console.log("Fruits after toReversed():", reversedFruits);

// Sorting Objects in Array
const cars = [
    { brand: "BMW", year: 2010 },
    { brand: "Ford", year: 2015 },
    { brand: "Audi", year: 2008 },
    { brand: "Tesla", year: 2020 }
];

// Sort cars by the brand name
cars.sort((a, b) => a.brand.localeCompare(b.brand));
console.log("Cars sorted by brand:", cars);

// Sort cars by the year in ascending order
cars.sort((a, b) => a.year - b.year);
console.log("Cars sorted by year:", cars);

// Sort cars by the year in descending order
cars.sort((a, b) => b.year - a.year);
console.log("Cars sorted by year (descending):", cars);
