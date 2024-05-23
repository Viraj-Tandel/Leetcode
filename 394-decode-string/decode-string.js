/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    if (s.length === 1) return s;

    let stack = [];
    let finalString = "";
    for (let x = 0; x < s.length; x++) {
        if (s[x] !== "]") {
            stack.push(s[x]);
        } else {
            // TODO Decode string
            let temp = "";
            for (let y = stack.length - 1; stack[y] !== "["; y--) {
                temp = stack.pop() + temp;
            }
            stack.pop(); // pop out square bracket '['
            let cnt = "";
            for (let y = stack.length - 1; y >= 0; y--) {
                if (!isNaN(stack[y])) cnt = stack.pop() + cnt;
                else break;
            }
            let res = "";
            cnt = Number(cnt);
            while (cnt) {
                res = res + temp;
                cnt--;
            }
            if (stack.length === 0) {
                finalString = finalString + res;
            } else {
                stack.push(res);
            }
        }
    }
    let temp = "";
    while (stack.length) {
        temp = stack.pop() + temp;
    }
    finalString += temp;
    return finalString;
};
