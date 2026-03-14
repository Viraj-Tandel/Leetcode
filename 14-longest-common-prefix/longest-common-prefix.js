/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = 0;
    for (let x = 0; x < strs[0].length; x++) {
        let cnt = 0;
        let temp = strs[0].substring(0, x + 1);
        for (let y = 0; y < strs.length; y++) {
            if (strs[y].substring(0, temp.length) == temp) {
                cnt++;
            }
        }
        if (cnt == strs.length) {
            result++;
        }
    }

    // console.log("Result----->", result);

    return strs[0].slice(0, result);
};