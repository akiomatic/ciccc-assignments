const students = [{
	name: "John",
	score1: 47,
	score2: 46,
}, {
	name: "Bob",
	score1: 23,
	score2: 24,
}, {
	name: "Nick",
	score1: 40,
	score2: 35,
}, {
	name: "Alex",
	score1: 44,
	score2: 45,
}, ];

const passingLimits = [91, 81, 71, 61, 51];

const degree = ["A", "B", "C", "D", "E"];

const totalScore = [];

function calculateTotalScore() {
    students.forEach((student) => totalScore.push(student.score1 + student.score2));
}

function outputResult() {
    let degreeIndex;
    for (let i = 0; i < totalScore.length; i++) {

        degreeIndex = passingLimits.findIndex((e) => totalScore[i] >= e);
        
        if (degreeIndex == -1) {
            console.log(students[i].name + " has failed the exam.");
            continue;
        }

        console.log(students[i].name + " has got the degree of '" + degree[degreeIndex] + "' with a score of " + totalScore[i] + "!");

    }
}

calculateTotalScore();

outputResult();