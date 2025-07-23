/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false;
    }

    let n = arr.length;
    let cnt = 0;

    // climb up
    while (arr[cnt] < arr[cnt + 1] && cnt + 1 < n) {
        cnt++;
    }

    // first or last can't be peak
    if (cnt == 0 || cnt == n - 1) return false;

    // climb down
    while (arr[cnt] > arr[cnt + 1] && cnt + 1 < n) {
        cnt++;
    }

    return cnt == n - 1;
};