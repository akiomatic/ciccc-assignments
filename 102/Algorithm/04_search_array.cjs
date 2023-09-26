/**
 * Challenge: Search Array
 * searchArrayFn is a function that takes a given array of numbers and a target number.
 * Write the logic to return true if the target is found in the array and false
 * otherwise.
 *
 * Test Output:
 * console.log(searchArray([], 1)) // false
 * console.log(searchArray([1, 2, 3, 4, 5], 1)) // true
 * console.log(searchArray([1, 2, 3, 4, 5], 6)) // false
 *
 * Positive Test Cases:
 * 1. Empty array should return false
 * 2. Array with target element should return true
 * 3. Array without target element should return false
 */

// The implementation
function searchArray(arr, target) {
    return arr.includes(target);

    // return arr.indexOf(target) !== -1;
}



console.log(searchArray([], 1)) // false
console.log(searchArray([1, 2, 3, 4, 5], 1)) // true
console.log(searchArray([1, 2, 3, 4, 5], 6)) // false