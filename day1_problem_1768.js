var mergeAlternately = function (word1, word2) {

    const merge = [];
    const n1 = word1.length;
    const n2 = word2.length;
    let i = 0;

    while (i < n1 || i < n2) {
        if (i < n1) {
            merge.push(word1.charAt(i));
        }
        if (i < n2) {
            merge.push(word2.charAt(i));
        }
        i++;
    }
    return merge.join('');
    
};