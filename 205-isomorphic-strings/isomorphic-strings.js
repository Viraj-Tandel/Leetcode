/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // let sFreqMap = {};
    // let tFreqMap = {};

    // for (let x = 0; x < s.length; x++) {
    //     if (sFreqMap[s[x]]) {
    //         sFreqMap[s[x]]++;
    //     } else {
    //         sFreqMap[s[x]] = 1;
    //     }
    // }

    // for (let x = 0; x < t.length; x++) {
    //     if (tFreqMap[t[x]]) {
    //         tFreqMap[t[x]]++;
    //     } else {
    //         tFreqMap[t[x]] = 1;
    //     }
    // }

    // return Object.keys(sFreqMap).length === Object.keys(tFreqMap).length;


    // if (s.length !== t.length) {
    //     return false;
    // }

    // let freqMap = {};

    // for (let x = 0; x < s.length; x++) {
    //     if (!freqMap[s[x]]) {
    //         if (Object.values(freqMap).indexOf(t[x]) == -1) {
    //             freqMap[s[x]] = t[x];
    //         } else {
    //             return false;
    //         }
    //     } else if (freqMap[s[x]]) {
    //         if (freqMap[s[x]] !== t[x]) {
    //             return false;
    //         }
    //     }
    // }

    // return true;

    if (s.length !== t.length) {
        return false;
    }

    let sToTmap = {};
    let tToSmap = {};

    for (let x = 0; x < s.length; x++) {
        if (!sToTmap[s[x]] && !tToSmap[t[x]]) {
            sToTmap[s[x]] = t[x];
            tToSmap[t[x]] = s[x];
        } else if (sToTmap[s[x]] !== t[x]) { // if already exist inside S to T map (foo --> bar)
            return false;
        } else if (tToSmap[t[x]] !== s[x]) { // if already exist inside T to S map (bar --> foo)
            return false;
        }
    }

    return true;
};