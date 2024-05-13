var reverseWords = function(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the string into an array of words using space as delimiter
    let wordsArray = s.split(' ').filter(word => word !== '');
    
    // Reverse the order of the array
    wordsArray.reverse();
    
    // Join the array elements into a single string with a single space separator
    return wordsArray.join(' ');
};

// Test cases
console.log(reverseWords("the sky is blue"));  // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));  // Output: "world hello"
console.log(reverseWords("a good   example")); // Output: "example good a"
