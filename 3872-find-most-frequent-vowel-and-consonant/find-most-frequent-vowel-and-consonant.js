/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let freqMap = {};
    let charFreq = 0;
    let vowelFreq = 0;

    for (let x = 0; x < s.length; x++) {

        if (freqMap[s[x]]) {
            freqMap[s[x]]++;
        } else {
            freqMap[s[x]] = 1;
        }

        if (s[x] == 'a' || s[x] == 'e' || s[x] == 'i' || s[x] == 'o' || s[x] == 'u') {
            vowelFreq = (freqMap[s[x]] > vowelFreq) ? freqMap[s[x]] : vowelFreq;
        } else {
            charFreq = (freqMap[s[x]] > charFreq) ? freqMap[s[x]] : charFreq;
        }
    }
    return charFreq + vowelFreq;
};