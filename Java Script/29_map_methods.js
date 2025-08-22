const fruits = new Map([
  ["Apples", 500],
  ["Bananas", 300],
  ["Oranges", 200]
]);

// set()           add elements, also be used to change existing map values
fruits.set("Mango", 100);
fruits.set("Grapes", 250);
console.log('fruits: ',fruits);

// get()           get the value of a key in a map
console.log('Mango: ',fruits.get('Mango')); // 100

// size()          returns the number of elements in a map
console.log(fruits.size); // 5

// has()           returns true if a key exists in a map
console.log(fruits.has('Grapes')); // true

// delete()        removes a map element
fruits.delete('Oranges');
console.log(fruits.get('Oranges')); // undefined

// clear()         removes all the elements from a map
const user = new Map();
user.set('name', 'Shubham');
user.set('age', 25);
user.set(true, 'Active');
console.log(user);
user.clear();
console.log(user); // {}

// forEach()       invokes a callback for each key/value pair in a map
fruits.forEach(element =>console.log(element));
txt = '';
fruits.forEach(function(value, key){
    txt += key +': ' + value + '\n';
})
console.log(txt);

// values()        returns an iterator object with the values in a map
console.log(fruits.values()); // { 500, 300, 100, 250 }

// keys()          returns an iterator object with the keys in a map
console.log(fruits.keys()); // { 'Apples', 'Bananas', 'Mango', 'Grapes' }

// entries()       returns an iterator object with the [key,values] in a map
console.log(fruits.entries()); // {[ 'Apples', 500 ],[ 'Bananas', 300 ],[ 'Grapes', 250 ]}
