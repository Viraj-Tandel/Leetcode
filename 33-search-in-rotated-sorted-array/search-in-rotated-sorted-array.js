/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, target) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // return index if target is at mid index
        if (a[m] == target) {
            return m;
        }

        // when left side is sorted
        if (a[l] <= a[m]) {
            if (target >= a[l] && target < a[m]) {
                // move right pointer
                r = m - 1;
            } else {
                // this means target exsit in another unsorted part
                l = m + 1;
            }
        } else {
            // exist in right half
            if (target > a[m] && target <= a[r]) {
                l = m + 1;
            } else {
                // exisit towrds the left side of right half
                r = m - 1;
            }
        }
    }

    return -1;
};