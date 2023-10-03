/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, power){
    if (power === 0) return 1;

    function recursive(power, result) {
        if (power === 0) return result;

        result *= base;

        return recursive(power - 1, result);
    }

    return recursive(power, 1);
}

/* 02-----------------------Flatten Nested Arrays---------------------------------------------------------------------
Write a recursive function called `flatten` that takes an array of nested arrays and returns a single
flat array containing all the elements from the nested arrays.
*/
// flatten([1, [2, 3], [4, [5, 6]]]); // Should return [1, 2, 3, 4, 5, 6]
// flatten([[], [1, 2, [3, 4]], [5]]); // Should return [1, 2, 3, 4, 5]
// flatten([[1, 2], [3, [4, 5]], 6]); // Should return [1, 2, 3, 4, 5, 6]

function flatten(arr) {
    const result = [];
    let current;

    function recursive(inner) {
        if (inner.length === 0) return result;

        current = inner.shift();

        if (Array.isArray(current)) {
            recursive(current);
        } else result.push(current);

        return recursive(inner);
    }

    return recursive(arr);
}


module.exports = {
    power,
    flatten
};