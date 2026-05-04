/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (a) {

    // Revised Solution (4/5/2026)
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);

        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[m] < a[r]) {
            r = m - 1;
        } else {
            l = m + 1;
        }

    }

};