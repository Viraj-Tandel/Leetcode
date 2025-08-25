/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // if (x < 2) {
    //     return x;
    // }
    // let left = 1;
    // let right = x;

    // while (left <= right) {
    //     let mid = Math.floor((left + right) / 2);
    //     let square = mid * mid;
    //     if (square == x) {
    //         return mid;
    //     } else if (square > x) {
    //         right = mid - 1;
    //     } else {
    //         left = mid + 1;
    //     }
    // }

    // return right;

    // * Practice solve 25/8/2025
    let left = 1;
    let right = x;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square == x) {
            return mid;
        } else if (square > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right;
};