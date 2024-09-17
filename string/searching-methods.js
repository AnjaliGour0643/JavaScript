// Sample string
let str = "JavaScript is an amazing language. JavaScript is versatile.";

// 1. String indexOf() - Returns the index of the first occurrence of a specified value
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));

// 2. String lastIndexOf() - Returns the index of the last occurrence of a specified value
console.log("Last index of 'JavaScript':", str.lastIndexOf("JavaScript"));

// 3. String search() - Searches a string for a specified value and returns the position
console.log("Search for 'amazing':", str.search("amazing"));

// 4. String match() - Searches a string for a match against a regular expression and returns the matches
let matchResult = str.match(/JavaScript/g);
console.log("Matches for 'JavaScript':", matchResult);

// 5. String matchAll() - Returns all matches of a string against a regular expression (ES2020)
let matchAllResult = str.matchAll(/JavaScript/g);
console.log("MatchAll results:");
for (let match of matchAllResult) {
    console.log(match);
}

// 6. String includes() - Checks if a string contains a specified value
console.log("Does the string include 'versatile'?", str.includes("versatile"));

// 7. String startsWith() - Checks if a string starts with a specified value
console.log("Does the string start with 'JavaScript'?", str.startsWith("JavaScript"));

// 8. String endsWith() - Checks if a string ends with a specified value
console.log("Does the string end with 'versatile'?", str.endsWith("versatile."));
