/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = {};
    let tMap = {};

    for (let x = 0; x < t.length; x++) {
        if (sMap[s[x]]) {
            sMap[s[x]]++;
        } else {
            sMap[s[x]] = 1;
        }

        if (tMap[t[x]]) {
            tMap[t[x]]++;
        } else {
            tMap[t[x]] = 1;
        }
    }

    for (let x = 0; x < t.length; x++) {
        if (tMap[t[x]] && sMap[t[x]]) {
            tMap[t[x]]--;
            sMap[t[x]]--;
        } else {
            return false;
        }
    }

    return true;
};