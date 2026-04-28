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

        // mid is the target element then return the index
        if (a[m] == target) {
            return m;
        }
        // Check which side sorted?
        // left side sorted
        if (a[l] <= a[m]) {
            // checking if target element exist on sorted side or not and updating the left and right based on that
            if (target < a[m] && target >= a[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        // right side sorted
        else {
            if (target > a[m] && target <= a[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }

    return -1;
};