// If targetNumber =10, then our pattern will be 10 5 0 5 10.
// If targetNumber =8, then our pattern will be 8 3 −2 3 8.


function printPattern(targetNumber) {
    // Base case
    if (targetNumber <= 0) {
        console.log(targetNumber);
        return;
    }

    console.log(targetNumber);

    // Recursive case
    printPattern(targetNumber - 5);

    // Added this line by myself!
    console.log(targetNumber);
}



printPattern(10); // 10 5 0 5 10
printPattern(8); // 8 3 -2 3 8