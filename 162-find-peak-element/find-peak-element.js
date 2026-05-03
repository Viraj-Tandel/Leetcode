/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (a) {
    let l = 0;
    let r = a.length - 1;

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (a[m] < a[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    // retunr l/r both are on same index
    return l;
};