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

        if (regex.test(s[left]) && regex.test(s[right])) {
            if (s[left] == s[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        } else if (!regex.test(s[left])) {
            left++;
        } else if (!regex.test(s[right])) {
            right--;
        }
    }

    return true;
};