/**
 * Challenge: Anagram
 * anagramFn is a function that takes two strings and returns true if the strings
 * are anagrams of each other and false otherwise. Case and punctuation should be
 * ignored.
 *
 * Test Output:
 * console.log(anagramFn('listen', 'silent')) // true
 * console.log(anagramFn('listen', 'silentt')) // false
 * console.log(anagramFn('triangle', 'integral')) // true
 * console.log(anagramFn('abcd', 'abc')) // false
 *
 * Positive Test Cases:
 * 1. Two empty strings should return true
 * 2. Two strings with the same characters should return true
 * 3. Two strings with different characters should return false
 * 4. Two strings with the same characters but different lengths should return false
 * 5. Two strings with the same characters but different order should return true
 *
 */

// The implementation
function anagramFn(str1, str2) {

    const sort = (str) => {
        return str.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("").sort().join("");
    }

    return sort(str1) === sort(str2);
}





console.log(anagramFn('listen', 'silent')) // true
console.log(anagramFn('listen', 'silentt')) // false
console.log(anagramFn('triangle', 'integral')) // true
console.log(anagramFn('abcd', 'abc')) // false