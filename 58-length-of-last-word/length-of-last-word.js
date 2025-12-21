/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0;
    let isWordFound = false;

    for (let x = s.length - 1; x >= 0; x--) {
        if (s[x] !== " ") {
            length++;
            isWordFound = true;
        } else if (s[x] == " " && isWordFound) {
            break;
        }
    }

    return length;
};