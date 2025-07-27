function palindromeChecker(str) {
    // Trim leading and trailing spaces with convert in lower case
    str = str.trim().toLowerCase();

    // Reverse the string using split-reverse-join
    const reversed = str.split('').reverse().join('');

    // Compare original and reversed strings
    if (str === reversed) {
        return `Yes! ${str}, It is a palindrome.`; // It's a palindrome
    } else {
        return `No! ${str}, It is not a palindrome.`; // Not a palindrome
    }
}

console.log(palindromeChecker(' MaDam     ')); // Output: yes
