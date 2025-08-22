// create a Map
// passing an Array to the new Map() constructor.
const fruits1 = new Map([
  ["Apples", 500],
  ["Bananas", 300],
  ["Oranges", 200]
]);
console.log(`fruits1: ${fruits1}`); // fruits1: [object Map]
console.log('fruits1: ',fruits1);

// Map with the set() method
const fruits2 = new Map();
// Set Map Values
fruits2.set("Mango", 100);
fruits2.set("Grapes", 250);
fruits2.set("Strawberry", 550);
console.log('fruits2: ',fruits2);

// set() method can also be used to change existing Map values
fruits1.set('Apples', 350);
console.log('Updated fruits1: ',fruits1);

console.log('Size of fruits1: ',fruits1.size);


// get() method gets the value of a key in a Map
console.log('Value of Bananas: ',fruits1.get('Bananas')); //300
console.log('Value of Grapes: ',fruits2.get('Grapes')); // 350 (Updated)
console.log('Value of Grapes: ',fruits1.get('Grapes'));  // undefined


console.log('Type of Maps: ',typeof fruits1);  // Object


console.log('instanceof: ',fruits1 instanceof Map);  // true



// Differences between JavaScript Objects and Maps:
// Object	                                Map
// -----------------------------------------------------------------------
// Not directly iterable	                Directly iterable
// Do not have a size property	            Have a size property
// Keys must be Strings (or Symbols)	    Keys can be any datatype
// Keys are not well ordered	            Keys are ordered by insertion
// Have default keys	                    Do not have default keys
