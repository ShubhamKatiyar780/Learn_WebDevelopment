// ------------ for loop ------------
let text = '';
for (let i = 0; i < 5; i++) {
  text += "The number is: " + i + '\n';
}
// console.log(text);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 2;
// let len = cars.length;
// let text1 = "";
// for (; i < len; i++) {
//     text1 += cars[i] + "\n";
// }

// You can intiate many values in expression 1 (separated by comma)
let i, len, text1;
for (i = 0, len = cars.length, text1 = ""; i < len; i++) {
  text1 += cars[i] + "\n";
}
// console.log(text1);

/*
"If you omit expression 2, you must provide a break inside the loop.
Otherwise the loop will never end. This will crash your browser."
*/
for (let i = 0; ; i++) {
    if (i===5) break; // manually stop
    // console.log(i);
}


// ------------ for in ------------
// JavaScript for in statement loops through the properties of an Object.
// Do not use for in over an Array if the index order is important.
const user = {fname : 'Shubham', lname : 'Katiyar', age : 24}
for (const key in user) {
    // console.log(user[key]);
}


// ------------ for of ------------
// JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
// over the array
for (const element of cars) {
    // console.log(element);
}
// over the String
let str = 'Shubham';
for (const i of str) {
    // console.log(i); // S h u b h a m
}
for (const i in str) {
    // console.log(i); // 0 1 2 3 4 5 6
}


// ------------ while ------------
let battery = 15;
while(battery <= 15){
    console.log(`Battery Low (${battery}%)`);
    break; // stop infinite loop
}


// ------------ do while ------------
/*
The do while loop is a variant of the while loop. This loop will execute
the code block once, before checking if the condition is true,then it will
repeat the loop as long as the condition is true.
*/

let y = 0;
do {
  console.log(`The number is: ${y}`);
  y++;
}
while (y < 5);