/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (a, target) {
    let l = 0;
    let r = a.length - 1;
    let ans = [-1, -1];

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (a[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    if (a[l] != target) {
        return [-1, -1];
    }
    ans[0] = l;

    l = 0;
    r = a.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);

        if (a[m] > target) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    ans[1] = l;

    return ans;
};