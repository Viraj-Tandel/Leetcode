/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, target) {
    // REVISED 2nd Time (3/5/26)

    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);

        if (a[m] == target) {
            return m;
        }

        if (a[l] <= a[m]) {
            if (target >= a[l] && target < a[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > a[m] && target <= a[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;
};