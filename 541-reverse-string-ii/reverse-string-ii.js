/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const list = [];

    for (let x = 0; x < s.length; x++) {
        list.push(s[x]);
    }

    for (let x = 0; x < s.length; x = x + (2 * k)) {
        let len = Math.min(k, s.length - x);
        let mid = Math.floor(len / 2);

        for (let y = 0; y < mid; y++) {
            let temp = list[y + x];
            list[y + x] = list[len - y - 1 + x];
            list[len - y - 1 + x] = temp;
        }
    }

    let result = "";
    for (let x = 0; x < list.length; x++) {
        result += list[x];
    }

    return result;
};
