/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = [];

    for (let y = 0; y < words.length; y++) {
        let tempSet = new Set(words[y]);
        if (tempSet.has(x)) {
            result.push(y);
        }
    }

    return result;
};