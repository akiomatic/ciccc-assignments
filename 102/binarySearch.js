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


console.log(binarySearch([1,2,3,4,5,6,7,8], 3)); //2
console.log(binarySearch([1,2,3,4,5,6,7,8], 11)); //-1
console.log(binarySearch([1,2,3,4,5,6,7,8], 8)); //7