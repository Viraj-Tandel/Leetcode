/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (a) {

    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        // EDGE CASE ARRAY ALREADY SORTED
        if (a[l] <= a[r]) {
            return a[l];
        }
        let m = l + Math.floor((r - l) / 2);

        // Mid is rotation point if less than its previous elment like [7 0 1 2 3...] 
        if (a[m] < a[m - 1]) {
            return a[m];
        }
        // Left part is sorted then right side is unsorted sp answer lies in the right part
        if (a[l] <= a[m]) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
};