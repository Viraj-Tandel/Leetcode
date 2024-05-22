/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (str1, str2) {
    let stack1 = [];
    let stack2 = [];
    let cnt = 0;
    let top1 = -1;
    let top2 = -1;

    while (str1[cnt] || str2[cnt]) {
        if (str1[cnt]) {
            if (str1[cnt] === "#") {
                if (top1 >= 0) top1--;
            } else {
                stack1[++top1] = str1[cnt];
            }
        }
        if (str2[cnt]) {
            if (str2[cnt] === "#") {
                if (top2 >= 0) top2--;
            } else {
                stack2[++top2] = str2[cnt];
            }
        }
        cnt++;
    }

    if(top1 !== top2) return false;

    cnt = Math.max(top1, top2);
    for (let x = cnt; x >= 0; x--) {
        if (stack1[x] !== stack2[x]) return false;
    }

    return true;
};
