/**
 * Challenge: Reverse a String
 * reverseStringFn is a function that takes a given string and must return a new
 * string with the characters in reverse order.
 *
 * Test Output:
 * console.log(reverseString('')) // ''
 * console.log(reverseString('abcdef')) // 'fedcba'
 * console.log(reverseString('123456789')) // '987654321'
 *
 * Positive Test Cases:
 * 1. Empty string should return empty string
 * 2. String with characters should return reversed string
 * 3. String with numbers should return reversed string
 *
 */

// The implementation
function reverseString(str) {
    return [...str].reverse().join("");
}






console.log(reverseString('')) // ''
console.log(reverseString('abcdef')) // 'fedcba'
console.log(reverseString('123456789')) // '987654321'