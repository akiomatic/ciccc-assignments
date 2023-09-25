/**
 * Challenge: Capitalization
 * capitalizeFn is a function that takes a string and returns a string with the
 * first letter capitalized. It should work with single letters, words, and
 * sentences.
 *
 * Test Output:
 * console.log(capitalizeFn('hello')) // Hello
 * console.log(capitalizeFn('aPPle')) // APPle
 * console.log(capitalizeFn('hi there')) // Hi There
 *
 * Positive Test Cases:
 * 1. String with all lowercase letters should return the string with the first letter capitalized
 * 2. String with all uppercase letters should return the string with the first letter capitalized
 * 3. String with mixed case letters should return the string with the first letter capitalized
 * 4. String with a single letter should return the string with the first letter capitalized
 * 5. String with a sentence should return the string with the first letter capitalized
 *
 */

// The implementation
function capitalizeFn(str) {
    return str.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1)).join(" ");
}





console.log(capitalizeFn('hello')) // Hello
console.log(capitalizeFn('aPPle')) // APPle
console.log(capitalizeFn('hi there')) // Hi There