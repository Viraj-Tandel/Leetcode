/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowelFreq = 0;
    let constantFreq = 0;
    let freqMap = {};

    // calculate frequancy
    for (let x = 0; x < s.length; x++) {
        if (freqMap[s[x]]) {
            freqMap[s[x]]++;
        } else {
            freqMap[s[x]] = 1;
        }
    }

    // figure out max count
    for (let x in freqMap) {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
            vowelFreq = Math.max(vowelFreq, freqMap[x]);
        } else {
            constantFreq = Math.max(constantFreq, freqMap[x]);
        }
    }

    return (vowelFreq + constantFreq);
};