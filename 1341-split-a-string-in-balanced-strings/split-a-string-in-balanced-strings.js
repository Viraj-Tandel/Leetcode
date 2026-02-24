/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let cnt = 0;
    let rCnt = 0;
    let lCnt = 0;
    for (let x = 0; x < s.length; x++) {
        if (s[x] == 'R') {
            rCnt++;
        } else if (s[x] == 'L') {
            lCnt++;
        }

        if (rCnt == lCnt) {
            cnt++;
            rCnt = 0;
            lCnt = 0;
        }
    }

    return cnt;
};