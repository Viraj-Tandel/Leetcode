/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let freqMap = {};

    // Counting frequancy
    for (let x = 0; x < s.length; x++) {
        if (freqMap[s[x]]) {
            ++freqMap[s[x]];
        } else {
            freqMap[s[x]] = 1;
        }
    }

    // checking frequancy for other string
    for (let x = 0; x < t.length; x++) {
        if (freqMap[t[x]] > 0) {
            freqMap[t[x]]--;
        } else {
            return false;
        }
    }

    return true;
};