// JavaScript is a dynamically type programming language.

// Using var        can be re-declared & updated. it is a global scope variable.

// if you re-declare a JavaScript variable declared with 'var' it will not lose it's value.
var x = 15;
var x;           // after the declaration of variable has no value technically it is undefined.
console.log(x)   // output-> 15

var  y = 10;
{  
var y = 20;
}
console.log(y)   // output-> 20


// Using let        can not be re-declared but can be updated. it is a block scope variable.
let my_name = "Shubham"; // it is a global scope variable.
{ 
let carName = "Valeno", brand = "Maruti Suzuki";    // Both carName and brand are block-scoped.
price = 800000;  // This is undeclared, so it's automatically created as a global variable
console.log(carName)
console.log(brand)
}
console.log(my_name)


// Using const        can not be re-declared or updated. it is a block scope variable.
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Shubham";
console.table(car)  // create a table


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.table(cars)

// Both objects and arrays are derived from the base Object type.
console.table(typeof(car))  // Object
console.table(typeof(cars))  // Object

// you can NOT reassign the array:
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// Symbol() is a built-in function in JS that creates a unique and immutable value, called a symbol.
let id = Symbol('123');     // You can use let or const — the result doesn't change.
let id1 = Symbol('123');
console.log(id===id1);
console.log(id);
console.log(id1);
console.log(typeof(id));
console.log(typeof(id1));