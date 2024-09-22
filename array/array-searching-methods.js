// Create a simple array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Banana", "Mango"];

// Array length
console.log("Length of array:", fruits.length);

// Array toString()
console.log("Array as string:", fruits.toString());

// Array at() - Get element at index 2
console.log("Element at index 2:", fruits.at(2));

// Array join() - Join all elements with a hyphen
console.log("Array joined with '-':", fruits.join('-'));

// Array pop() - Remove the last element
console.log("Popped element:", fruits.pop());
console.log("Array after pop:", fruits);

// Array push() - Add a new element to the end
fruits.push("Grapes");
console.log("Array after push:", fruits);

// Array shift() - Remove the first element
console.log("Shifted element:", fruits.shift());
console.log("Array after shift:", fruits);

// Array unshift() - Add a new element to the beginning
fruits.unshift("Kiwi");
console.log("Array after unshift:", fruits);

// Array delete() - Delete the element at index 1
delete fruits[1];
console.log("Array after delete:", fruits);

// Array concat() - Concatenate another array
let moreFruits = ["Peach", "Plum"];
let allFruits = fruits.concat(moreFruits);
console.log("Array after concat:", allFruits);

// Array copyWithin() - Copy array elements within itself
allFruits.copyWithin(2, 0, 2);
console.log("Array after copyWithin:", allFruits);

// Array flat() - Flatten a nested array
let nestedArray = [["Strawberry", "Blueberry"], ["Lemon", "Lime"]];
let flatArray = nestedArray.flat();
console.log("Flattened array:", flatArray);

// Array splice() - Add and remove elements
allFruits.splice(2, 1, "Melon", "Papaya");
console.log("Array after splice:", allFruits);

// Array toSpliced() - Non-destructive splice (ES2023)
let splicedArray = allFruits.toSpliced(2, 2, "Cherry", "Dragonfruit");
console.log("Array after toSpliced:", splicedArray);

// Array slice() - Slice a portion of the array
let slicedArray = allFruits.slice(1, 4);
console.log("Sliced array:", slicedArray);

// Array indexOf() - Find the index of the first occurrence of "Banana"
console.log("Index of 'Banana':", fruits.indexOf("Banana"));

// Array lastIndexOf() - Find the last occurrence of "Banana"
console.log("Last index of 'Banana':", fruits.lastIndexOf("Banana"));

// Array includes() - Check if "Mango" is in the array
console.log("Includes 'Mango'?:", fruits.includes("Mango"));

// Array find() - Find the first fruit longer than 5 characters
// let longFruit = fruits.find(fruit => fruit.length > 5);
// console.log("First fruit longer than 5 characters:", longFruit);

// Array findIndex() - Find the index of the first fruit longer than 5 characters
let longFruitIndex = fruits.findIndex(fruit => fruits.length > 5);
console.log("Index of the first fruit longer than 5 characters:", longFruitIndex);

// Array findLast() - Find the last fruit longer than 5 characters
let lastLongFruit = fruits.findLast(fruit => fruits.length > 5);
console.log("Last fruit longer than 5 characters:", lastLongFruit);

// Array findLastIndex() - Find the index of the last fruit longer than 5 characters
let lastLongFruitIndex = fruits.findLastIndex(fruit => fruit.length > 5);
console.log("Index of the last fruit longer than 5 characters:", lastLongFruitIndex);
