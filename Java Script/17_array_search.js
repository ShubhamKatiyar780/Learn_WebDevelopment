const fruits = ["Apple", "Orange", "Apple", "Mango", NaN];

// indexOf(item, start)        first occurrence
console.log(fruits.indexOf('Orange', 5)); // -1

// lastIndexOf(item, start)        position of the last occurrence(If not found, returns -1.)
console.log(fruits.lastIndexOf('Apple', 1)); // 0
console.log(fruits.lastIndexOf('Apple', -1)); // 2
console.log(fruits.lastIndexOf(NaN)); // -1
// Index 1 is "Orange", not "Apple".
// It goes back to index 0, which is "Apple".

// includes(searchElement, fromIndex)
console.log(fruits.includes("Banana"));     // false
console.log(fruits.includes(NaN)); // true

// find()       returns the value of the first array element that passes a test function
const numbers = [1, 4, 9, 16, 25];
let found1 = numbers.find(num1 => num1 > 15);
console.log(found1); // 16
let found2 = numbers.find(search1);
function search1(value, index, array){
    return value > 21
}
console.log(found2); // 25

// findIndex()      returns the index of the first array element that passes a test function
let found3 = numbers.findIndex(search2);
function search2(value, index, array){
    return value > 8
}
console.log(found3); // 2

// findLast()       method that will start from the end of an array and return the value of the first element that satisfies a condition
let found4 = numbers.findLast(search3);
function search3(value, index, array){
    return value < 16
}
console.log(found4); // 9

// findLastIndex()      finds the index of the last element that satisfies a condition
let found5 = numbers.findLastIndex(search4);
function search4(value, index, array){
    return value < 8
}
console.log(found5); // 1
