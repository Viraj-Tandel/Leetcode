/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // let frequancyMap = {};

    // for (let x = 0; x < s.length; x++) {
    //     if (frequancyMap[s[x]]) {
    //         frequancyMap[s[x]] = frequancyMap[s[x]] + 1;
    //     } else {
    //         frequancyMap[s[x]] = 1;
    //     }
    // }

    // // console.log("frequancyMap: ", frequancyMap);
    // for (let x = 0; x < t.length; x++) {
    //     if (!frequancyMap.hasOwnProperty(t[x]) || frequancyMap[t[x]] === 0) {
    //         return t[x];
    //     } else {
    //         frequancyMap[t[x]] = frequancyMap[t[x]] - 1;
    //     }
    // }

    let sumS = 0;
    let sumT = 0;

    for (let x = 0; x < s.length; x++) {
        sumS += s.charCodeAt(x);
    }

    for (let y = 0; y < t.length; y++) {
        sumT += t.charCodeAt(y);
    }

    return String.fromCharCode(sumT - sumS);

};