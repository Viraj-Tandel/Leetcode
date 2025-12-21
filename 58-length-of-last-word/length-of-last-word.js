/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // if (s.length === 1) {
    //     return 1;
    // }

    let words = s.split(" ");
    let result = [];

    for (let x = 0; x < words.length; x++) {
        if (words[x] !== "") {
            result.push(words[x]);
        }
    }

    return result[result.length - 1].length;
};