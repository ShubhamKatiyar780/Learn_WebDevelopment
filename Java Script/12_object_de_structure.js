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
};

// de structuring
const {id, email} = facebook;
// console.log(id);

// change the name of key
const {id : regNO} = facebook;
// console.log(regNO===id);

// Set default values
const {name, gender = 'Male'} = facebook;
// console.log(gender);

// Nested object destructuring
const {email :{primary, address :{contry, district}}} = facebook;
// console.log(contry, district);

// Destructuring in function parameters
function display({name, email:{secondary, address:{contry}}}){
    return console.log(`My name is ${name} and my id is ${secondary}. I am from ${contry}.`);
};
// display(facebook);

// Rest operator with destructuring
const {isLoggedIn, ...values} = facebook;
console.log(isLoggedIn);
console.log(values);