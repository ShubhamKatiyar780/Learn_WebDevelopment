// ----→  Implicit Type Conversion (Type Coercion)

// JavaScript automatically converts one data type to another when needed.
console.log('5' + 2);      // "52" ----→ number 2 is converted to string
console.log('2' - 5);      // -3   ----→ string '2' is converted to number
console.log('5' * 2);      // 10   ----→ -, *, / ----→ prefers numbers
console.log('5' / 2);      // 2.5
console.log(true + 1);     // 2   ----→ true becomes 1
console.log(false + '2');  // "false2" ----→ false becomes string
// + ----→ prefers strings
// -, *, / ----→ prefers numbers


// ----→  Explicit Type Conversion (Type Casting)

// You manually convert from one type to another using built-in functions.
// To String
String(123);        // "123"
(123).toString();   // "123"
true.toString();    // "true"

// to hexadecimal
console.log(((255).toString(16))); // ff

// To Number
Number("123");      // 123
console.log(parseInt("123px"));  // 123
console.log(parseFloat("3.14bvc")); // 3.14
// because parseInt() reads the string from left to right.
console.log(parseInt("dfgh266")); // NaN (not a number) 
Number(true);       // 1
Number(false);      // 0

// To Boolean
Boolean(1);         // true
Boolean(0);         // false
Boolean("hello");   // true
// JS considers certain values as "falsy", and everything else as "truthy" when converted to Boolean.
console.log(Boolean(""));       // false   An empty string ("") has no characters
console.log(Boolean(" "));      // true   It contains one character (a space), so it's considered truthy.
Boolean(null);      // false


// Some Tricky Cases
Number("abc");      // NaN
/*  Even though arrays and objects may be empty,
    they are still reference types, and all objects (including empty ones)
    are considered truthy in JavaScript.    */
Boolean([]);        // true
Boolean({});        // true
Boolean(undefined); // false
console.log(!'sddg' === Boolean('sddg')); // false
// Boolean('sddg')----→true | !true ----→false
console.log(!!5 === Boolean(5)); // true

// bug (JavaScript Quirks)
console.log(("Bug (JavaScript Quirks)"));
console.log(typeof(null));   // "object"
console.log(typeof([] + []));  //string
console.log([] + {});  // "[object Object]"
console.log({} + []);    // "[object Object]"
console.log(NaN === NaN);  // false
console.log(Number.isNaN(NaN)); // true
console.log(true + true); // 2
console.log(typeof Date); // function


