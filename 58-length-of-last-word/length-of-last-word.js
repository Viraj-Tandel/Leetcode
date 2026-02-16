/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let cnt = 0;
    let isCharFound = false;
    for (let x = s.length - 1; x >= 0; x--) {
        if (s[x] !== " ") {
            cnt++;
            isCharFound = true;
        } else if (s[x] == " " && isCharFound) {
            break;
        }
    }

    return cnt;
};