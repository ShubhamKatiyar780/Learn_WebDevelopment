const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Alphabetic Sort

// sort()
// console.log(fruits.sort());

// reverse()
// console.log(fruits.reverse());
// By combining sort() and reverse(), you can sort an array in descending order

// toSorted()           (ES2023)
/*
difference between toSorted() and sort() is that
the first method creates a new array, keeping the original array unchanged,
while the last method alters the original array.
*/
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
// console.log(sorted);

// toReversed()           (ES2023)
/*
The difference between toReversed() and reverse() is that
the first method creates a new array, keeping the original array unchanged,
while the last method alters the original array.
*/
const reversed = months.toReversed();
// console.log(reversed);



// Numeric Sort

// sort()
const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); // [1,10,100,25,40,5]
/*
.sort() method converts elements to strings and sorts lexicographically
(alphabetically), not numerically.
*/

// sort()          with Compare Function
/*
Compare Function        function(a, b){return a - b}
purpose of the compare function is to define an alternative sort order.
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/
console.log(points.sort(function(a, b){return a - b}));

// in Random Order.
console.log(points.sort(function(){return 0.5 - Math.random()}));

// The Fisher Yates Method
for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
// console.log(points);

// Math.min.apply
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin(points)); // 1
// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)

// Math.max.apply
function myArrayMax(arr) {
  return Math.max.apply(undefined, arr);
}
console.log(myArrayMax(points)); // 100


console.log(Math.min.apply(points)); // infinity


//  find the highest number is to use a home made method
function maxArray(arr){
  let len = arr.length;
  let max = -Infinity;
  while(len--){
    if(arr[len] > max){
      max = arr[len]
    }
  }
  return max;
}
console.log(maxArray(points));

//  find the minimum number is to use a home made method
function minArray(arr){
  let len = arr.length;
  let min = Infinity;
  while(len--){
    if(arr[len] < min){
      min = arr[len]
    }
  }
  return min;
}
console.log(minArray(points));


// Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
console.log(cars.sort(function(a, b){return a.year - b.year}))

console.log(cars.sort(
  function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x > y){return 1;}
    if(x < y){return -1;}
    return 0;
}))