/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;

    // Building LPS Array
    while (j < n) {
        if (needle[i] == needle[j]) {
            lps[j] = i + 1;
            i++;
            j++;
        }
        else {
            if (i == 0) {
                lps[j] = 0;
                j++;
            } else {
                i = lps[i - 1];
            }
        }
    }

    // Matching String with the help of LPS
    i = j = 0;

    while (i < m) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            if (j == 0)
                i++;
            else
                j = lps[j - 1];
        }

        // check weather we found the match if whole string scanned it means we got the answer
        if (j == n)
            return i - n;
    }

    return -1;
};