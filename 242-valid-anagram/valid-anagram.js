/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // if (s.length !== t.length) {
    //     return false;
    // }

    // let sMap = {};
    // let tMap = {};

    // for (let x = 0; x < t.length; x++) {
    //     if (sMap[s[x]]) {
    //         sMap[s[x]]++;
    //     } else {
    //         sMap[s[x]] = 1;
    //     }

    //     if (tMap[t[x]]) {
    //         tMap[t[x]]++;
    //     } else {
    //         tMap[t[x]] = 1;
    //     }
    // }

    // for (let x = 0; x < t.length; x++) {
    //     if (tMap[t[x]] && sMap[t[x]]) {
    //         tMap[t[x]]--;
    //         sMap[t[x]]--;
    //     } else {
    //         return false;
    //     }
    // }

    // return true;

    // if (s.length !== t.length) {
    //     return false;
    // }

    // let freqMap = {};

    // for (let x = 0; x < s.length; x++) {
    //     freqMap[s[x]] = (freqMap[s[x]] || 0) + 1;
    // }

    // for (let x = 0; x < t.length; x++) {
    //     if (!freqMap[t[x]]) return false;
    //     freqMap[t[x]]--;
    // }

    // return true;

    // Revision ---> 8/2/25
    if (s.length !== t.length) {
        return false;
    }

    let freqMap = {};

    for (let x = 0; x < s.length; x++) {
        freqMap[s[x]] = (freqMap[s[x]] || 0) + 1;
    }
    console.log(freqMap)
    for (let x = 0; x < t.length; x++) {
        if (freqMap[t[x]]) {
            freqMap[t[x]]--;
        } else {
            return false;
        }
    }

    return true;
};