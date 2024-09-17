// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

// Sample string
let str = "  Hello, JavaScript World!  ";

// 1. String length - Returns the length of the string
console.log("Length of string:", str.length);

// 2. String charAt() - Returns the character at a specified index
console.log("Character at index 7:", str.charAt(7));

// 3. String charCodeAt() - Returns the Unicode of the character at a specified index
console.log("Unicode of character at index 7:", str.charCodeAt(7));

// 4. String at() - Returns the character at the specified position (ES2022)
console.log("Character at position 7 using at():", str.at(7));

// 5. String [ ] - Accesses the character at a specific index (like array)
console.log("Character at index 7 using []:", str[7]);

// 6. String slice() - Extracts a part of a string and returns a new string
console.log("Slice from index 2 to 10:", str.slice(2, 10));

// 7. String substring() - Similar to slice but cannot accept negative indexes
console.log("Substring from index 2 to 10:", str.substring(2, 10));

// 8. String substr() - Extracts part of the string (Deprecated, but still works)
console.log("Substr from index 2, length 8:", str.substr(2, 8));

// 9. String toUpperCase() - Converts the string to uppercase
console.log("Uppercase:", str.toUpperCase());

// 10. String toLowerCase() - Converts the string to lowercase
console.log("Lowercase:", str.toLowerCase());

// 11. String concat() - Concatenates two or more strings
let str2 = "Let's learn JS!";
console.log("Concatenated string:", str.concat(" ", str2));

// 12. String trim() - Removes whitespace from both sides of a string
console.log("Trimmed string:", str.trim());

// 13. String trimStart() - Removes whitespace from the start of a string
console.log("Trimmed start string:", str.trimStart());

// 14. String trimEnd() - Removes whitespace from the end of a string
console.log("Trimmed end string:", str.trimEnd());

// 15. String padStart() - Pads the current string with another string from the start
console.log("Padded start:", str.trim().padStart(30, "*"));

// 16. String padEnd() - Pads the current string with another string from the end
console.log("Padded end:", str.trim().padEnd(30, "*"));

// 17. String repeat() - Returns a new string with a number of copies of the original string
console.log("Repeated string:", str.repeat(2));

// 18. String replace() - Replaces a specified value with another value in a string
console.log("Replaced 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));

// 19. String replaceAll() - Replaces all occurrences of a specified value
let multiStr = "Hello JS, I love JS!";
console.log("Replace all 'JS' with 'JavaScript':", multiStr.replaceAll("JS", "JavaScript"));

// 20. String split() - Splits a string into an array of substrings
console.log("Split string by space:", str.split(" "));
