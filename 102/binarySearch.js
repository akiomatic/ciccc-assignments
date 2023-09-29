/*
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
If you find the value you want, return the index
If the value is too small, move the left pointer up
If the value is too large, move the right pointer down
If you never find the value, return -1
*/


function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1, middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) return middle;

        if (target <= arr[middle]) {
            right = middle;
        } else left = middle + 1;
    }

    return -1;
}


// Trying to make it work in a diffrent method, using a recursive call
function binarySearchWithRecursion(arr, target) {

    let left = 0, right = arr.length - 1, middle = Math.floor((left + right) / 2);

    function recursive() {
        if (left > right) return;
        if (arr[middle] === target) return;

        if (left <= right) {
            if (target <= arr[middle]) {
                right = middle;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left + right) / 2);
            recursive();
        }

       return;
    }

    recursive();

    if (left <= right) {
        return middle;
    }

    return -1;
}


// Here is the improved version of the function above by ChatGPT
// I definitely need some practice to get used to the recursive calls:)
function binarySearchWithRecursionByChatGPT(arr, target) {
    function recursive(left, right) {
        if (left > right) return -1;
        
        let middle = Math.floor((left + right) / 2);
        
        if (arr[middle] === target) return middle;

        if (target < arr[middle]) {
            return recursive(left, middle - 1);
        } else {
            return recursive(middle + 1, right);
        }
    }

    return recursive(0, arr.length - 1);
}


console.log(binarySearch([1,2,3,4,5,6,7,8], 3)); //2
console.log(binarySearch([1,2,3,4,5,6,7,8], 11)); //-1
console.log(binarySearch([1,2,3,4,5,6,7,8], 8)); //7

console.log("------------------------------");

console.log("Test1 ", binarySearchWithRecursion([1,2,3,4,5,6,7,8], 3)); //2
console.log("Test2 ", binarySearchWithRecursion([1,2,3,4,5,6,7,8], 11)); //-1
console.log("Test3 ", binarySearchWithRecursion([1,2,3,4,5,6,7,8], 8)); //7

console.log("------------------------------");

console.log("TestGPT1 ", binarySearchWithRecursionByChatGPT([1,2,3,4,5,6,7,8], 3)); //2
console.log("TestGPT2 ", binarySearchWithRecursionByChatGPT([1,2,3,4,5,6,7,8], 11)); //-1
console.log("TestGPT3 ", binarySearchWithRecursionByChatGPT([1,2,3,4,5,6,7,8], 8)); //7