/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (str1, str2) {
    let stack1 = [];
    let stack2 = [];
    let cnt = 0;

    while (str1[cnt] || str2[cnt]) {
        if (str1[cnt]) {
            if (str1[cnt] === '#') {
                stack1.pop();
            } else {
                stack1.push(str1[cnt]);
            }
        }
        if (str2[cnt]) {
            if (str2[cnt] === '#') {
                stack2.pop();
            } else {
                stack2.push(str2[cnt]);
            }
        }
        cnt++;
    }

    let s1 = s2 = "";
    for (let x = Math.max(stack1.length, stack2.length); x >= 0; x--) {
        if (stack1[x]) {
            s1 = stack1[x] + s1;
        }

        if (stack2[x]) {
            s2 = stack2[x] + s2;
        }
    }

    return s1 === s2;
};