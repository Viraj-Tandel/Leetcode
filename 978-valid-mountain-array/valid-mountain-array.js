/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false;
    }

    let cnt = 0;
    let n = arr.length;
    for (let x = 0; x < n - 1; x++) {
        if (x < n - 1 && arr[x] < arr[x + 1]) {
            cnt++;
        }
        else {
            break;
        }
    }

    if (cnt == 0 || cnt == n - 1)
        return false;

    for (let x = cnt; x < n - 1; x++) {
        if (x < n - 1 && arr[x] > arr[x + 1]) {
            cnt++;
        } else {
            return false;
        }
    }
    return cnt == n - 1;
};