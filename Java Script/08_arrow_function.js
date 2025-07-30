const user = {
    username: "Shubham",
    price: 299,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // {this.username} == {user.username}
        console.log(this); // current context(value)
    }
}
// user.welcomeMessage()   // Shubham, welcome to website
// user.username = "Katiyar"
// user.welcomeMessage()    // Katiyar, welcome to website
// console.log(this); // here we are in node environment, so this reffer to empty because we have not global context.


// inside the browser global object is "window object".


//  Inside object methods, use this to access properties of the same object.
function sayHi() {
    console.log(this.username);
}
const users = {
    username: "Shubham",
    welcome: sayHi
};
// users.welcome(); // "Shubham" — because this refers to user

// function useOfThis(){
//     let myname = "Shubham";
//     console.log(this); 
//     // console.log(this.myname); // undefined
// }
// useOfThis(); // we can not use this in function declaration.

// const useOfThis = function (){
//     let myname = "Shubham";
//     console.log(this);
//     // console.log(this.myname); // undefined
// }
// useOfThis(); // we can not use this in function expression.

// arrow function
// const useOfThis = () => {
//     let myname = "Shubham";
//     // console.log(this); // empty parentheses
//     console.log(this.myname); // undefined
// }
// useOfThis();

// explicit return
// const addTwoNumber = (a, b) => {
//     // return console.log(this); // empty parentheses
//     return a+b;
// }
// console.log(addTwoNumber(8, 5));

// implicit return
// const addTwoNumber = (a, b) => a + b;
const addTwoNumber = (a, b) => (a + b);
// console.log(addTwoNumber(8, 7));


// const returnObject = (a, b) => {myname : 'Shubham Katiyar';}
// console.log(returnObject(8, 7)); // undefined

const returnObject = (a, b) => ({myname : 'Shubham Katiyar'}); // wrap with parentheses()
console.log(returnObject()); // {myname : 'Shubham Katiyar'}

