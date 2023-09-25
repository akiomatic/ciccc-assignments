/**
 * Challenge: True Counter
 * trueCounterFn is a function that takes an array of booleans. Write the logic
 * to return the number of true values in the array.
 *
 * Test Output:
 * console.log(trueCounter([])) // 0
 * console.log(trueCounter([true, true, true])) // 3
 * console.log(trueCounter([false, false, false])) // 0
 * console.log(trueCounter([true, false, true])) // 2
 *
 * Positive Test Cases:
 * 1. Empty array should return 0
 * 2. Array with all true values should return the length of the array
 * 3. Array with all false values should return 0
 * 4. Array with mixed true and false values should return the number of true values
 *
 */

// The implementation
function trueCounter(arr) {
    return arr.filter(e => e).length;
}




console.log(trueCounter([])) // 0
console.log(trueCounter([true, true, true])) // 3
console.log(trueCounter([false, false, false])) // 0
console.log(trueCounter([true, false, true])) // 2