/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    if (!s.length)
        return 0;

    let resultStack = [];
    let maxPar = 0;
    let cnt = 0;
    let topIndex = -1;

    while (s[cnt]) {
        if (s[cnt] === '(') {
            resultStack[++topIndex] = '('
        } else if (s[cnt] == ')') {
            maxPar = Math.max(maxPar, topIndex+1);
            topIndex--;
        }
        cnt++;
    }
    console.log(resultStack);

    return maxPar;
};