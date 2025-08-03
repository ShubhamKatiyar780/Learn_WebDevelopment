// two way to create a string.

// -------- 1. String Literal --------
const str = 'asdfghasdfgh';

// -------- 2. String Object using new String() --------
const strobj = new String(str);

// console.log(str === strobj); // false
// console.log(str == strobj); // true
// console.log( typeof str); // string primitive
// console.log( typeof strobj); // object, not a primitive

// -------- Character access --------
// console.log((str).charAt(2));  // d (access an individual character in a string).
// console.log(str[3]);  // f (treat the string as an array-like object).



// -------- Static methods --------

// -------- String.fromCharCode(num1, num2, /* …, */ numN) --------ES1 (do not handle the emoji)
// returns a string created from the specified sequence of UTF-16 code units.
// console.log(String.fromCharCode(65, 66, 67));
// console.log(String.fromCharCode(2325));
//  -------- String.fromCodePoint(num1, num2, /* …, */ numN) --------ES6 (handle the emoji)
// returns a string created from the specified sequence of code points.
// console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804)); //"☃★♲你"
// console.log(String.fromCharCode(0xd83c, 0xdf03)); // 🌃\\

// -------- String.raw(strings, sub1, sub2, /* …, */ subN) --------
let strr = 'Line1\nLine2'
// console.log(strr); 
const raw = String.raw`Line1\nLine2`;
// console.log(raw);



// -------- Instance methods --------

// -------- at(index) --------
// console.log(str.at(5)); // h
// console.log(str.at(55)); // undefined (If index is out of the range)
// console.log(str.at(-1)); // start from the last

// -------- charAt(index) --------
// console.log((str).charAt());  // a (No index was provided, used 0 as default.)
// console.log((str).charAt(2));  // d (access an individual character in a string.)
// console.log((str).charAt(undefined));  // a (undefined is converted to 0)
// console.log((str).charAt(15));  // If index is out of the range returns an empty string.

// -------- charCodeAt(Index) --------ES1 (do not handle the emoji)
// console.log(str.charCodeAt()); // 97 (No index was provided, used 0 as default.)
// console.log(str.charCodeAt(8)); // 100 (returns an integer between 0-65535 representing the UTF-16 code unit at the given index.)
// console.log(str.charCodeAt(undefined)); // 97 (undefined is converted to 0)
// console.log(str.charCodeAt(15)); // If index is out of range charCodeAt() returns NaN.)
// -------- codePointAt(Index) --------ES6 (handle the emoji)
// console.log(str.codePointAt()); // 97 (No index was provided, used 0 as default.)
// console.log(str.codePointAt(8)); // 100 (returns an integer between 0-65535 representing the UTF-16 code unit at the given index.)
// console.log(str.codePointAt(undefined)); // 97 (undefined is converted to 0)
// console.log(str.codePointAt(15)); // If index is out of range charCodeAt() returns undefined.)

// -------- concat(str1, str2, /* …, */ strN) --------
const str1 = 'Shubham';
const str2 = 'Katiyar';
// console.log(str1.concat(',', str2));

// -------- endsWith(searchstring, fromIndex) --------
// console.log(str1.endsWith("m"));
// console.log(str1.endsWith("h", 5));

// -------- includes(searchstring, fromIndex) --------
const myname = 'I am learning Java Script';
const word = 'n';
// console.log(`"${word}" word ${myname.includes(word, 11) ? "is" : "is not"} present in the "${myname}".`);
// console.log(`"k" letter ${str1.includes('k') ? "is" : "is not"} present in the "${str1}".`);
// console.log(myname.includes(word)); // true

// -------- indexOf(searchstring, fromIndex) --------
// console.log('hello world hello'.indexOf()); // -1
// console.log('hello world hello'.indexOf('')); // 0
// console.log('hello world hello'.indexOf('', 5)); // 5
// console.log('hello world hello'.indexOf('word')); // -1
// console.log('hello world hello'.indexOf('', 20)); // 17 (If index is out of range return the maximum lenght)
// console.log('hello world hello'.indexOf('s')); // -1
// console.log('hello world hello'.indexOf('o', 5)); // 7
// console.log('hello world hello'.indexOf('o', -5)); // If Index is negative, JS treats it as 0.

// -------- isWellFormed() --------
// returns a boolean indicating whether this string contains any lone surrogates.
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];
for (const str of strings) {
//   console.log(str.isWellFormed());
}

// -------- lastIndexOf(searchstring, fromIndex) --------
// The index of the last occurrence of searchString found, or -1 if not found.
// console.log("canal".lastIndexOf("a")); // 3
// console.log("canal".lastIndexOf("a", 2)); // 1
// console.log("canal".lastIndexOf("a", 0)); // -1 (not found)
// console.log("canal".lastIndexOf("x")); // -1
// console.log("canal".lastIndexOf("c", -5)); // 0 (negative index JS treats it as 0)
// console.log("canal".lastIndexOf("c", 0)); // 0
// console.log("canal".lastIndexOf("")); // 5
// console.log("canal".lastIndexOf("", 2)); // 2 (length)

// -------- localeCompare(compareString, locales, options) --------
// compares two strings based on local language rules (locale-specific collation).
// -1----	str1 < str2
// 0----	str1 == str2
// 1----	str1 > str2
// console.log("a".localeCompare("b")); // -1
// console.log("c".localeCompare("c")); // 0
// console.log("C".localeCompare("c")); // 1
// console.log("file2".localeCompare("file10", undefined, { numeric: true }));

// -------- match(regexp) --------
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
console.log(paragraph.match(/[a-z]/g));


// console.log(str.replace('d', '4')); // replace only first element
// console.log(str.replaceAll('d', '5')); // replace all the element
// console.log(str.split('d')); // ['as', 'fghas', 'fgh']
// console.log((10).toString(2));  // 1010 (change in binary)
// console.log((100n).toString(2));  // 1100100 (BigInt in binary)







const s1 = '2+5';
const s2 = new String(s1);
// console.log(eval(s1)); // 7
// console.log(eval(s2));  // '2+5'
// console.log(eval(s2.valueOf()));  // 7

// console.log(a);


