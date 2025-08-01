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

    for (let x = 0; x < s.length; x++) {
        freqMap[s[x]] = (freqMap[s[x]] || 0) + 1;
    }

    for (let x = 0; x < t.length; x++) {
        if (!freqMap[t[x]]) return false;
        freqMap[t[x]]--;
    }

    return true;
};