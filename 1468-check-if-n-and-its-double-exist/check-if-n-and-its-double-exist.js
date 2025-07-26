/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let x = 0; x < arr.length; x++) {
        let doubleNum = 2 * arr[x];
        for (let y = 0; y < arr.length; y++) {
            if (x !== y) {
                if (doubleNum == arr[y]) {
                    return true;
                }
            }
        }
    }
    return false;
};