/* 01-----------------------Upvotes vs Downvotes---------------------------------------------------------------------
/*
    Given an object containing counts of both upvotes and downvotes,
    return what vote count should be displayed.
    This is calculated by subtracting the number of downvotes from upvotes.

    getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
    getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
    getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

    You can expect only positive integers for vote counts.
*/

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}


/* 02-----------------------Word Endings---------------------------------------------------------------------
/*
    Create a function that adds a string ending to each member in an array.

    addEnding(["clever", "meek", "hurried", "nice"], "ly")
        ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
    addEnding(["new", "pander", "scoop"], "er")
        ➞ ["newer", "panderer", "scooper"]
    addEnding(["bend", "sharpen", "mean"], "ing")
        ➞ ["bending", "sharpening", "meaning"]

    Don't forget to return the result.
*/
function addEnding(arr, ending) {
    return arr.map(e => e += ending);
}



/* 03-----------------------Get Sum of People's Budget---------------------------------------------------------------------
/*
    Create the function that takes an array with
    objects and returns the sum of people's budgets.

    getBudgets([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
    ]) ➞ 65700

    getBudgets([
        { name: "John",  age: 21, budget: 29000 },
        { name: "Steve",  age: 32, budget: 32000 },
        { name: "Martin",  age: 16, budget: 1600 }
    ]) ➞ 62600

*/

function getBudgets(arr) {

    function recursion(arr, total) {
        if (arr.length === 0) return total;

        total += arr.shift().budget;

        return recursion(arr, total);
    }

    return recursion(arr, 0);
}



/* 04-----------------------How Many Vowels?---------------------------------------------------------------------
/*
    Create a function that takes a string and returns the number (count)
    of vowels contained within it.

    countVowels("Clarify") ➞ 2
    countVowels("Yolk") ➞ 1
    countVowels("Prediction") ➞ 4

    a, e, i, o, u are considered vowels (not y).
    All test cases are one word and only contain letters.
*/

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return [...str].filter(e => vowels.includes(e)).length;
}


/* 05-----------------------BONUS (Not mandatory): Converting Objects to Arrays---------------------------------------------------------------------
/*
    Write a function that converts an object into an array,
    where each element represents a key-value pair in the form of an array.

    toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
    toArray({ xcoords: 15, ycoords: 12 }) ➞ [["xcoords", 15], ["ycoords", 12]]
    toArray({}) ➞ []

    Return an empty array if the object is empty.
*/

function toArray(obj) {
    return Object.entries(obj);
}


module.exports = {
    getVoteCount,
    addEnding,
    getBudgets,
    countVowels,
    toArray,
};