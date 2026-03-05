/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        let regex = /^[a-zA-Z0-9]$/;
        let regexLeft = regex.test(s[left]);
        let regexRight = regex.test(s[right]);

        if (regexLeft && regexRight) {
            if (s[left] == s[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        } else if (!regexLeft) {
            left++;
        } else if (!regexRight) {
            right--;
        }
    }

    return true;
};