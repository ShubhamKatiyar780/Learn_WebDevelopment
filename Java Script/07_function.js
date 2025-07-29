// Function Declaration
function addTwonumber(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a + b;
    } else {
        return ("Enter valid input (number).");
    } 
}
// console.log(addTwonumber(4, 11));
// Assigning the function reference to another variable
let referenceOfFunction = addTwonumber;
// console.log(referenceOfFunction(4, 5));


// Rest parameters----→ Used when the number of parameters is unknown or variable.
function total(...values){
    // here values is an array.
    let totalvalue = 0;
    for (let i = 0; i < values.length; i++) {
        totalvalue += values[i];
    }
    return totalvalue;
}
// console.log(total(2,4,8,10))


function handleObject(object){
    // Destructuring and template string to display object's details
    console.log(`My name is ${object.myname}. i am from ${object.address}.`)
    return
}
let userDetails = {myname:'Shubham', address:'Kanpur'}
// handleObject(userDetails)


// Function Expression----→ Assigned to a variable
console.log(subtract(5, 2)); // error
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 2)); // Output: 3
