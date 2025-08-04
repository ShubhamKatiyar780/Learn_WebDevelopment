const fruits = ["Banana", "Orange", "Apple", "Mango"];

// length
// console.log(fruits.length); // 4
// The length property can also be used to set the length of an array
fruits.length = 6;
// console.log(fruits.length); // 6

// toString()
// console.log(fruits.toString()); // elements of an array as a comma separated string.

// at()
console.log(fruits.at(-1) === fruits[-1]);

// join()
// console.log(fruits.join(' * ')); // Banana * Orange * Apple * Mango * undefined * undefined

// pop() at the end and returns the value that was "popped out"
// console.log(fruits.pop()); // Pine Apple

// push() at the end
fruits.push('Pine Apple');
// console.log(fruits);

// shift()      remove the element (working on the first element)
let poped = fruits.shift();
// console.log(fruits[1], "removed element: ", poped); // Apple, removed element: Banana

// unshift()        add element (at the beginning) and returns the new array length
// console.log(fruits.unshift('Kiwi'));
// console.log(fruits);

// delete()
// Using delete() leaves undefined holes in the array, Use pop() or shift() instead.
delete fruits[0];
// console.log(fruits[0]); // undefined

// concat()
const myBoys = ["Tyrion Lannister", "Jon Snow", 'Ramsay Bolton', 'Robert Baratheon'];
const myGirls = ["Sansa Stark", "Arya Stark", "Daenerys Targaryen", 'Missanddei'];
const boysAndGirls = myBoys.concat(myGirls);
// console.log(boysAndGirls.concat('Jorah Mormont'));

// forEach()
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    // console.log(`Index ${index}: ${value}`)
};

// copyWithin()     
// copies a sequence of array elements to another position within the same array, without changing its length.
// Modifies the original array, Does not add or remove elements.
boysAndGirls.copyWithin(1, 4, 7); // Copy [4, 6] to index 1.
// console.log(boysAndGirls);

// Flattening an Array       you want to convert a multi-dimensional array into a one-dimensional array
// flat(depth)
const arr = [1, 2, [3, 4], [5, [6, [7, 8, 9]]]];;
// console.log(arr.flat()); // default depth = 1
// console.log(arr.flat(2));// depth = 2
// flatMap()
// console.log((arr.flat(3)).flatMap(x => [x*10]));



// splice(startIndex, deleteItem, endIndex)     adds new items to an array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
// first parameter (2) defines the position where new elements should be added (spliced in).
// second parameter (0) defines how many elements should be removed (without leaving "holes").
// rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
console.log(fruit); // ["Banana", "Orange","Lemon", "Kiwi", "Apple", "Mango"]
let removed = fruit.splice(0, 1); // returns an array with the deleted items on the index 0.
console.log(removed); // Banana

// toSpliced()
/*
The difference between the new toSpliced() method and the old splice() method is that
the new method creates a new array, keeping the original array unchanged, 
while the old method altered the original array.
*/

// slice(startIndex, endIndex)      method slices out a piece of an array
/*
slice() method creates a new array.
slice() method does not remove any elements from the source array.
*/
console.log(fruit); // ["Orange","Lemon", "Kiwi", "Apple", "Mango"]
const citrus = fruit.slice(1); // 1-end
console.log(citrus); // ["Lemon", "Kiwi", "Apple", "Mango"]
