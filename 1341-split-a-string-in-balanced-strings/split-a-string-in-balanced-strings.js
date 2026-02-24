/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let cnt = 0;
    let balance = 0;

    for (let x = 0; x < s.length; x++) {
        if (s[x] == 'R') {
            balance++;
        } else if (s[x] == 'L') {
            balance--;
        }

        if (balance == 0) {
            cnt++;
        }
    }

    return cnt;
};