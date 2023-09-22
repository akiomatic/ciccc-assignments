/**
 * Challenge: Is Ascending Order
 * isSortedFn is a function that takes an array of numbers. Write the logic to
 * return true if the elements in the array are in ascending order and false
 * otherwise. An array is said to be in ascending order if the elements, from
 * left to right, are in increasing order. None of the elements in the array are
 * equal to each other.
 *
 * Test Output:
 * console.log(isSorted([])) // true
 * console.log(isSorted([1, 2, 3, 4, 5])) // true
 * console.log(isSorted([1, 3, 2, 5, 4])) // false
 * console.log(isSorted([7])) // true
 * console.log(isSorted([2, 5])) // true
 *
 * Positive Test Cases:
 * 1. Empty array should return true
 * 2. Sorted array should return true
 * 3. Unsorted array should return false
 * 4. Array with single element should return true
 * 5. Array with two elements in ascending order should return true
 * 6. Array with two elements in descending order should return false
 *
 */

// function isSorted(array) {
//     if (array.length < 2) return true;
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] > array[i + 1]) return false;
//     }
//     return true;
// }

function isSorted(array) {
    return array.every((e, i) => i == 0 || array[i - 1] < e);
}



console.log(isSorted([])) // true
console.log(isSorted([1, 2, 3, 4, 5])) // true
console.log(isSorted([1, 3, 2, 5, 4])) // false
console.log(isSorted([7])) // true
console.log(isSorted([2, 5])) // true