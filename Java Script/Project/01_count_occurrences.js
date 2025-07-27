// Define the input string
const str = "To be, or not to be, that is the question.";

// Initialize a counter to count occurrences of 't'
let count = 0;

// Find the first occurrence of 't' in the string
let position = str.indexOf('t');

// Loop as long as 't' is found in the string
while (position !== -1) {
    // Increment the counter since we found a 't'
    count++;

    // Search for the next occurrence of 't' starting from the next character
    position = str.indexOf('t', position + 1);
}

// Print the total count of 't' characters
console.log(count);  // Output: 6
