/**
 * Challenge: Integral Reversal
 * integralReversalFn is a function that takes a number and returns the integral
 * reversal of that number. The integral reversal of a number is the number with
 * its digits reversed.
 *
 * Test Output:
 * console.log(integralReversalFn(123)) // 321
 * console.log(integralReversalFn(1234)) // 4321
 * console.log(integralReversalFn(100)) // 1
 * console.log(integralReversalFn(-123)) // -321
 *
 * Positive Test Cases:
 * 1. Number with single digit should return the number
 * 2. Number with multiple digits should return the number with its digits reversed
 * 3. Number with trailing zeros should return the number with its digits reversed, excluding the trailing zeros
 * 4. Negative number should return the negative number with its digits reversed
 */

// The implementation
function integralReversalFn(num) {
    let reverse = 0, digit = 0;
    const negative = num < 0;

    if (negative) num = Math.abs(num);

    while (num > 0) {                            // ex) num = 123
      digit = num % 10;                          // 1st) digit = 3,   2nd) digit = 2,    3rd) digit = 1
      reverse = (reverse * 10) + digit;          // 1st) reverse = 3, 2nd) reverse = 32, 3rd) reverse = 321
      num = Math.floor(num / 10);                // 1st) num = 12,    2nd) num = 1,      3rd) num = 0
    }
    
    return negative ? -reverse : reverse;
}







console.log(integralReversalFn(123)) // 321
console.log(integralReversalFn(1234)) // 4321
console.log(integralReversalFn(100)) // 1
console.log(integralReversalFn(-123)) // -321
