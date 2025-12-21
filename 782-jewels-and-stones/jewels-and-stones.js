/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (let x = 0; x < stones.length; x++) {
        for (let y = 0; y < jewels.length; y++) {
            if (stones[x] == jewels[y]) {
                count++;
            }
        }
    }
    return count;
};