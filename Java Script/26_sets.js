// create a set
// Passing an array to new Set()
const A = new Set(['a', 'b', 'c']);
console.log(`size of the set A: ${A.size}`); // total element


// Create a Set and add values
const B = new Set();        // create a empty set.
B.add(1, 'b', 3);       // Only first argument (1) is used. rest ('b' and 3) are ignored silently.
B.add('b');
B.add(3);
B.add(3);       // duplicate item ignored silently.
// console.log(`set B: ${B}`);     // [object Set]

// Use the spread operator
console.log(`set B: ${[...B].join(' ')}`);     // set B: 1,b,3
// Use forEach() to print one by one
B.forEach(element => console.log(element));
//  Use for...of loop
txt = '';
for (const element of B) {
    txt += element + " ";
}
console.log(txt);


const C = new Set();
[10, 20, 30, 'd', 'Shubh'].forEach(item => C.add(item));

// use the values()
const val = C.values();
console.log('set C: ',val);
console.log(typeof C);  // object


console.log('instanceof:', C instanceof Set);  // true