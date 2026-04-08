/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let x = 0; x < s.length; x++) {
        if (stack.length == 0) {
            stack.push(s[x]);
        } else {
            let top = stack.length - 1;
            if (map[stack[top]] == s[x]) {
                stack.pop();
            } else {
                stack.push(s[x]);
            }
        }
    }
    return stack.length == 0;
};