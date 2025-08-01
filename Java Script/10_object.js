    // Create an Object

    // 1.   Object literals
    const sym = Symbol('this is a symbol') // create a symbol and add as a key in object/
const person = {
    [sym] : 'mysymbol', // [] is the notation of add to symbol.
    "full name": "Shubham Katiyar", // we can never access with dot(.).
    from : 'Lucknow'
};

    // Add Properties
person.firstName = "Shubham"; // key----→ always store like a string.
person.lastName = "Katiyar";
person.age = 24;
person.eyeColor = "blue";

    // Access of value
// console.log(person["full name"]); // can not be accessed with dot notation.
// console.log(person.firstName); // can be accessed with dot notation.
// console.log(person["lastName"]); // can be accessed with dot notation.
// console.log(person['age']); // can be accessed with dot notation.
// console.log(person[sym]); //can be accessed with [] notation

    // change the value of from
// person.from = 'Kanpur';

    // lock the value for do not change.
// Object.freeze(person);
// person.from = 'Punjab'; //  changes not allow.

// object x and the object person share the same memory address.
const x = person; // The object x is not a copy of person. The object x is person.
x.car = "valeno";
// console.log((person)=== (person)); // true
// console.log(x); // [Symbol(this is a symbol)]: 'mysymbol'


    // add a function inside an object
person.respect = function(){
    console.log('Namste sir!');
    return console.log(`how are ${this.firstName} `);
};
// person.respect();

    // add a function with parameter inside an object
person.greeting = function(x){
    return console.log(`Namste ${x}!`);
};
// console.log(person.hello); // reference of function not execute.
// person.greeting('Rajat');


    // Display Properties
// console.table(person.firstName + " " + person.lastName + "," + person.age + ", " + person.eyeColor);

    // Build a Text
let text = "";
for (let x in person) {
    text += person[x] + " ";
};
// console.log(text);


// 2.   Object Constructor(singleton)
const facebook = new Object();
facebook.id = "123abc";
facebook.name = "Shubham";
facebook.isLoggedIn = false;
facebook.email = {
    primary : 'shubham@gmail.com',
    secondary : 'shubham.katiyar@gmail.com',
    isVarified : true,
    address : {
        contry : 'India',
        state : 'UP',
        district : 'Farrukhabad'
    }
}
// console.log(facebook);
// console.log(facebook.email.address.contry);

// merge the object
const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'a', 4:'b'};
const obj3 = {5:'a', 6:'b'};
// console.log({obj1,obj2});  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = Object.assign(obj1, obj2, obj3) // all assign in obj1.
// console.log(obj4 === obj1); // true
const obj5 = Object.assign({}, obj1, obj2, obj3); // all assign in obj5.
const obj6 = {...obj1, ...obj2, ...obj3}; // all assign in obj6.
console.log(obj5 === obj6); // false (different memory references)

console.log(Object.keys(facebook)); // return all keys in the form of an array.
console.log(Object.values(facebook)); // return all values in the form of an array.
console.log(Object.entries(facebook));  // return all [keys, values], [],.... in the form of an array.
console.log(facebook.hasOwnProperty('email'));  // true


let y = 'asdf';
y = 'rty'; // (y[0] = 'x' won’t work), but you can assign a new string to the variable.
let z = y; 
z = 'FDSA';
// console.log(y.toUpperCase());
// console.log(z.toLowerCase());

let str = 'ijkl'
// console.log(str.toLocaleUpperCase('tr-TR')); // Turkish rule(tr-TR) apply hua — dotted capital İ.




