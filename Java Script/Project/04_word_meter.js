function wordMeter (name){
    const wordCount = name.trim().split(' ');
    const characterCount = wordCount.join('');
    // return wordCount.length, characterCount.length; // This only returns the last value.
    return [wordCount.length, characterCount.length]; // return as an array.
};

const [x, y] = wordMeter(' shubham katiyar     ');
console.log(`Word: ${x}, Characters:${y}`);

const myArray = wordMeter(' shubham katiyar     ');
console.log(`Word: ${myArray[0]}, Characters:${myArray[1]}`);