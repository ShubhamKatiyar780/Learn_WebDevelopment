// let marks = prompt("Enter Your Marks: ");



// let marks = 49;
// marks = Number(marks);
// if (marks >=80 && marks <=100) {
//     console.log("You are pass with grade: A");
// }
// else if (marks >=70 && marks < 80) {
//     console.log("You are pass with grade: B");
// }
// else if (marks >=60 && marks < 70) {
//     console.log("You are pass with grade: C");
// }
// else if (marks >=50 && marks < 60) {
//     console.log("You are pass with grade: D");
// } else {
//     console.log("Sorry! You are fail with grade: F");
// }


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter your marks: ", (marks) => {
  marks = Number(marks);
  
  if (marks >= 80 && marks <= 100) {
    console.log("You are pass with grade: A");
  } else if (marks >= 70 && marks < 80) {
    console.log("You are pass with grade: B");
  } else if (marks >= 60 && marks < 70) {
    console.log("You are pass with grade: C");
  } else if (marks >= 50 && marks < 60) {
    console.log("You are pass with grade: D");
  } else {
    console.log("You are fail with grade: F");
  }

  readline.close();
});
