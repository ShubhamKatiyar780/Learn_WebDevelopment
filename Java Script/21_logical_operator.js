// Nullish Coalescing Operator (??)

// Returns the right-hand value only when the left-hand value is null or undefined.
// It’s useful for setting default values.
let myName = null;
// let myName = 'Shubham';
let city = 'Kanpur';
let display = myName ?? city;
// console.log(display); // null--->Kanpur or Shubham--->Shubham

let score = 0;
console.log(score ?? 100); // 0

// Optional Chaining Operator (?.)

// Safely accesses deeply nested properties or calls functions without throwing an error
// if part of the chain is null or undefined.
let user = {
    fullName : 'Shubham',
    address : null
};
// console.log(user.address.city); // TypeError: Cannot read properties of null (reading 'city')
console.log(user.address?.city); // undefined (no error)


// with nested Object
let student = {
    fullName : 'Shubham',
    marks : {
        math : 95,
        physics : 94,
    }
}
console.log(student.marks?.math); // 95
console.log(student.marks?.chemistry); // undefined (no error)


// with Function Call
let person = {
  greet: () => "Hello!"
};
console.log(person.greet?.());      // "Hello!"
console.log(person.sayBye?.());     // undefined (no error)


// with array
let data = {
  users: [
    { name: "Shubham" }
  ]
};
console.log(data.users?.[0]?.name);   // "Shubham"
console.log(data.users?.[1]?.name);   // undefined (safe)
