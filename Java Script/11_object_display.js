    // Create an Object
const person = {};
    // Add Properties
person.firstName = "Shubham";
person.lastName = "Katiyar";
person.age = 24;
person.eyeColor = "blue";

    // Display Properties

// console.table(person.firstName + " " + person.lastName + "," + person.age + ", " + person.eyeColor);

    // Build a Text
let text = "";
for (let x in person) {
    text += person[x] + " ";
};
// console.log(text);

    // Using Object.values()
const myArray = Object.values(person);
// console.log(myArray);

    // Using Object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500}; 
let textt = "";
for (let [fruit, amount] of Object.entries(fruits)) {
    textt += fruit + ": " + amount + "\n";
};
// console.log(textt);

    // Using JSON.stringify()
    // JS objects can be converted to a string with JSON method JSON.stringify().
let myString = JSON.stringify(person);
// Display String
console.log(myString);

