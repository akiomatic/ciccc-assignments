/**
 * Challenge: FizzBuzz
 * fizzBuzzFn is a function that takes a number and returns a string based on the
 * following rules:
 * 1. If the number is divisible by 3, return 'Fizz'
 * 2. If the number is divisible by 5, return 'Buzz'
 * 3. If the number is divisible by 3 and 5, return 'FizzBuzz'
 * 4. Otherwise, return the number
 *
 * Test Output:
 * console.log(fizzBuzz(1)) // 1
 * console.log(fizzBuzz(3)) // Fizz
 * console.log(fizzBuzz(5)) // Buzz
 * console.log(fizzBuzz(15)) // FizzBuzz
 *
 * Positive Test Cases:
 * 1. Number divisible by 3 should return 'Fizz'
 * 2. Number divisible by 5 should return 'Buzz'
 * 3. Number divisible by 3 and 5 should return 'FizzBuzz'
 * 4. Number not divisible by 3 or 5 should return the number
 *
 */

// The implementation
function fizzBuzz(num) {
    let result = "";

    if (num % 3 === 0) {
        result += "Fizz";
    }
    if (num % 5 === 0) {
        result += "Buzz";
    }

    return result === "" ? num : result;
}


console.log(fizzBuzz(1)) // 1
console.log(fizzBuzz(3)) // Fizz
console.log(fizzBuzz(5)) // Buzz
console.log(fizzBuzz(15)) // FizzBuzz
