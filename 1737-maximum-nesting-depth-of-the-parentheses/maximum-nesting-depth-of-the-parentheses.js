/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    if (!s.length)
        return 0;

    let maxDepth = 0;
    let cnt = 0;
    let currentDepth = 0;

    while (s[cnt]) {
        if (s[cnt] === '(') {
            currentDepth++;
            maxDepth = Math.max(maxDepth,currentDepth);
        } else if (s[cnt] == ')') {
            currentDepth--;
        }
        cnt++;
    }

    return maxDepth;
};