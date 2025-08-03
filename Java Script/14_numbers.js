// In JS, Numbers are Always 64-bit Floating Point.
// This format stores numbers in 64 bits,
// where the number (the fraction) is stored in bits 0 to 51,
// the exponent in bits 52 to 62, and the sign in bit 63.

let a = 3.14;
let b = 3;
// console.log(a, b);

// Extra large or extra small numbers can be written with scientific (exponent) notation
let c = 123e5; // 12300000
let d = 123e-5; // 0.00123
// console.log(c, d);

// Floating point arithmetic is not always 100% accurate
let e = 3.14 + 0.45;
// console.log(e); // 3.5900000000000003

// NaN - Not a Number
let f = 100 / 'abc';
let g = 100 / 20;
let h = NaN + g;
let i = NaN + '45'
// console.log(`f: ${f}, g: ${g}, h: ${h}, i: ${i}`);

// Infinity
let j = 2;
while(j != Infinity){
    j = j * j;
    // console.log(j,"\n");
}
// console.log(2/0); // Infinity
// console.log(typeof(2/0)); // number
// console.log((255).toString(16)); // ff (hexaddecimal)
// console.log(255..toString(16)); // two dot: one to end the number, one to call method.

// BigInt Hex, Octal and Binary
let hex = 0x2000003n;
let oct = 0o400000003n;
let bin = 0b1000000000011n;

// toPrecision()  return a string
// console.log(9.656.toPrecision()); // 9.656
// console.log(9.656.toPrecision(2)); // 9.6
// console.log(9.656.toPrecision(5)); // 9.6560 (string)

// valueOf()         returns a number as a number
// console.log((123).valueOf());
// console.log(typeof(100 + 23).valueOf()); // number

// usning toFixed()   Rounds to fixed decimal places.
// console.log(e.toFixed(2)); // 3.59

// toPrecision()
const num1 = 123.678;
// console.log(num1.toPrecision(3)); // 124

// toLocaleString()
const num2 = 100000000;
// console.log(num2.toLocaleString('en-IN')); // 10,00,00,000

// Math
// console.log(Math.abs(-45)); // 45
// console.log(Math.round(45.259)); // 45
// console.log(Math.round(45.659)); // 46
// console.log(Math.ceil(45.159)); // 46 (top)
// console.log(Math.floor(45.959)); // 45 (bottom)
// console.log(Math.max(20,61,80)); // 80
// console.log(Math.min(...[20,61,80])); // 20 (spread operator (...) to unpack the array elements)
// console.log(Math.random()); // 0 to 1 random
// console.log(Math.random() * 10); // 0 to 9 random
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 9 random
const mini = 10;
const maxi = 20;
console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini); // 11 to 20 random


// Number Properties
let x = Number.MAX_VALUE;
console.log(x); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

