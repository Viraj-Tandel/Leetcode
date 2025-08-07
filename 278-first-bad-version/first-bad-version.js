/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        // let left = 1;
        // let right = n;
        // let mid;

        // while (left < right) {
        //     mid = Math.floor((left + right) / 2);
        //     let result = isBadVersion(mid);

        //     if (!result) {
        //         left = mid + 1;
        //     } else {
        //         right = mid;
        //     }
        // }

        // return left;

        // * Practice solve 7/8/2025

        let left = 1;
        let right = n;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1
            }
        }
        return left;
    };
};