/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

    let charArr = s.split("");

    for (let x = 0; x < charArr.length; x = x + (2 * k)) {
        let n = k;
        let mid = Math.floor(n / 2);
        for (let y = 0; y < mid; y++) {
            let temp = charArr[x + y];
            charArr[x + y] = charArr[x + n - y - 1];
            charArr[x + n - y - 1] = temp;
        }
    }

    return charArr.join("");
};