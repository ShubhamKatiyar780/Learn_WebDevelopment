const str = 'Shubham';
let reversed1 = '';
// Reversing using slice() in a loop
for (let i = (str.length - 1); i >= 0; i--) {
// Use slice(i, i + 1) to get one character at a time from the end
    reversed1 += str.slice(i, i+1);

    // reverseStr1 += str[i];
}
console.log(`Reversed using loop: ${reversed1}`);
 
let reversed2 = str.split(''); // ['S', 'h', 'u', 'b', 'h', 'a', 'm']
reversed2 = reversed2.reverse(); // ['m', 'a', 'h', 'b', 'u', 'h', 'S']
reversed2 = reversed2.join(''); // "mahbuhS"
console.log(`Reversed using split-reverse-join: ${reversed2}`);