/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let l = 1;
    let r = n;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // mid is higher than the picked number so reducing search space towards left
        if (guess(m) == -1) {
            r = m - 1;
        }
        // mid is lower than the picked number so reducing search space towards right
        else if (guess(m) == 1) {
            l = m + 1;
        }
        // mid is the picked number
        else {
            return m;
        }
    }

    // as per the problem there always a answer exist but just return as per problem return type
    return -1;
};