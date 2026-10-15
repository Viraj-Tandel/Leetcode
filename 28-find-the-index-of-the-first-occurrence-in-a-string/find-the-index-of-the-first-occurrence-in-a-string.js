/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    for (let x = 0; x <= m - n; x++) {
        let y = 0;

        for (y = 0; y < n; y++) {
            // if not match breaking the loop
            if (haystack[x + y] !== needle[y]) {
                break;
            }
        }

        if (y == n) {
            return x;
        }
    }
    return -1;
};