/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // PRACTISE SOLVED 16/3/2026
    if (s.length !== t.length)
        return false;

    let sToT = {};
    let tToS = {};

    for (let x = 0; x < s.length; x++) {
        if (!sToT[s[x]] && !tToS[t[x]]) {
            sToT[s[x]] = t[x];
            tToS[t[x]] = s[x];
        } else if (sToT[s[x]] !== t[x]) {
            return false;
        } else if (tToS[t[x]] !== s[x]) {
            return false;
        }
    }

    return true;
};