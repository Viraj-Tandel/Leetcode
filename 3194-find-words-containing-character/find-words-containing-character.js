/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = [];

    for (let z = 0; z < words.length; z++) {
        let temp = words[z];
        for (let y = 0; y < temp.length; y++) {
            if (temp[y] == x) {
                result.push(z);
                break;
            }
        }
    }

    return result;
};