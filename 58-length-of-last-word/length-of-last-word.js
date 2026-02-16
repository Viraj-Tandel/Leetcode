/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let cnt = 0;
    let i = s.length - 1;

    // skipping trailing space
    while (s[i] == " " && i >= 0) {
        i--;
    }

    // counting last word length after skipping the empty space
    while (s[i] !== " " && i >= 0) {
        cnt++;
        i--;
    }

    return cnt;
};