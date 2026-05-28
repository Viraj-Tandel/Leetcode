/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (a[m] !== a[m + 1] && a[m] !== a[m - 1]) {
            return a[m];
        } else if (a[m] == a[m - 1]) {
            let oddCnt = m - 1 - l;
            if (oddCnt % 2 == 0) {
                l = m + 1;
            } else {
                r = m - 2;
            }
        } else if (a[m] == a[m + 1]) {
            let oddCnt = r - (m + 1);
            if (oddCnt % 2 == 0) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        }
    }
};