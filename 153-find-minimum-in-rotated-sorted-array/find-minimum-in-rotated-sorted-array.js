/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (a) {
    let l = 0;
    let r = a.length - 1;

    while (l < r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);

        if (a[l] <= a[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    return a[l];
};