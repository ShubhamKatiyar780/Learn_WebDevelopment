// Primitive Data Types These store single values and are immutable.
// Number----→ Represents integers & floating-point numbers 
let x = 42;

// String----→ Text enclosed in quotes 
let name = "Shubham";

// Boolea----→ `true` or `false` values 
let isOnline = false;

// Undefined----→ Declared but not assigned a value 
let a;

// Null----→ Represents no value let 
b = null;

// BigInt----→ Large integers beyond (2^53 - 1) 
let big = 123456789n;

// Symbol----→ Unique identifiers 
let id = Symbol("user");



// Non-Primitive (Reference) Data Types These can store multiple values or complex structures(mutable).
// Object----→	Key-value pairs	
let person = { name: "Shubham", age: 24 };

// Array----→	Ordered list of values	
let colors = ["red", "blue", "green"];

// Function----→	Block of reusable code	
function greet() { console.log("Hi"); }

// Date, RegExp----→	Special built-in objects	
let today = new Date();


// typeof
typeof 42;         // "number"
console.log(typeof Infinity); // "number"
typeof "hello";    // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
console.log(typeof(null));   // "object" (quirk in JS)
typeof {};         // "object"
typeof [];         // "object"
typeof function(){}; // "function"
console.log(typeof(NaN)); // number
