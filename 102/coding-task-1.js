const scoreMatt = 80;
const scoreSimon = 45;
const passScore = 51;

if (scoreMatt >= passScore && scoreSimon >= passScore) {
   console.log("Both students have passed.");
} else if (scoreMatt >= passScore || scoreSimon >= passScore) {
   console.log("One of the students have passed!")
} else {
   console.log("Both students have failed...");
}

if (scoreMatt >= passScore) {
   console.log("Matt has passed the test! Score: ", scoreMatt);
} else if (scoreSimon >= passScore) {
   console.log("Simon has passed the test! Score: ", scoreSimon);
}