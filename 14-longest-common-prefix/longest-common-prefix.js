/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let index = 0;

    for (let x = 0; x < strs[0].length; x++) {
        let temp = strs[0][x];
        let isEq = true;

        for (let y = 1; y < strs.length; y++) {
            if (x >= strs[y].length || strs[y][x] !== temp) {
                isEq = false;
                break;
            }
        }

        if (isEq) {
            index++;
        } else {
            break;
        }
    }

    return strs[0].slice(0, index);
};