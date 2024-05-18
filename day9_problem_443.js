/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let j = 0;  // Pointer to write the compressed characters

    for (let i = 0; i < chars.length;) {
        let char = chars[i];
        let count = 0;

        // Count the number of occurrences of the current character
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Write the character at position j
        chars[j] = char;
        j++;

        // If count is greater than 1, write the count as digits
        if (count > 1) {
            for (let digit of String(count)) {
                chars[j] = digit;
                j++;
            }
        }
    }

    // The final length is the value of j
    return j;
};

// Test cases
console.log(compress(["a","a","b","b","c","c","c"])); // Output: 6, chars = ["a","2","b","2","c","3"]
console.log(compress(["a"])); // Output: 1, chars = ["a"]
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])); // Output: 4, chars = ["a","b","1","2"]
