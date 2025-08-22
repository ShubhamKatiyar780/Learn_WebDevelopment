// Creating an Array
const firstName = ['Shubham', 'Rohit', 'Anshul', 'Shivangi'];

// You can also create an empty array, and provide elements later
const lastName = [];
lastName[0] = 'Katiyar'
lastName[1] = 'Kumar'
lastName[2] = 'Rana'
lastName[3] = 'Katiyar'

// Using new Keyword
const state = new Array('UTTAR PRADESH', 'JHARKHAND', 'HIMANCHAL PRADESH', 'UTTAR PRADESH');

// Access the Full Array
// console.log(firstName);
// console.log(lastName);
// console.log(state);

// change the element
state[0] = 'Delhi';
// console.log(state);

// Converting an Array to a String
// console.log(firstName.toString()); // string

//  Array.forEach() function (run a function once for each element in the array)
(state.forEach(myFunction));
function myFunction(element, index) {
  // console.log(`${index}: ${element}`); // 
};

// Adding Array Elements
state.push('HARIYANA');
// console.log(state);

// Adding elements with high indexes can create undefined "holes" in an array
state[7] = 'Punjab';
// console.log(state);

// Array.isArray()
// console.log(Array.isArray(state)); // true

// instanceof
// console.log(state instanceof Array); // true

// Nested Arrays and Objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
console.log(myObj.cars[0]['models'][1]);
<<<<<<< HEAD
console.log(myObj.cars[2]['models'][0]);
=======
console.log(myObj.cars[2]['models'][0]);
>>>>>>> 64be62d0a7d8162d78b1f77c2a0229bce2f51f6e
