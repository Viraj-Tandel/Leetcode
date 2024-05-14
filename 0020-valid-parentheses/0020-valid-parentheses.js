/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // let stringArray = s.split("");
    // let resultStack = [];
    // for (let x = 0; x < stringArray.length; x++) {
    //     if (stringArray[x] == '(' || stringArray[x] == '{' || stringArray[x] == '[') {
    //         resultStack.push(stringArray[x]);
    //     } else if (stringArray[x] == ')' || stringArray[x] == '}' || stringArray[x] == ']') {
    //         if (resultStack[resultStack.length - 1] === '(' && stringArray[x] === ')') {
    //             resultStack.pop();
    //         } else if (resultStack[resultStack.length - 1] === '{' && stringArray[x] === '}') {
    //             resultStack.pop();
    //         } else if (resultStack[resultStack.length - 1] === '[' && stringArray[x] === ']') {
    //             resultStack.pop();
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    // return resultStack.length === 0;
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let x = 0; x < s.length; x++) {
        if (s[x] === '(' || s[x] === '{' || s[x] === '[') {
            // TODO pushing element to stack
            stack.push(s[x]);
        } else if (s[x] === ')' || s[x] === '}' || s[x] === ']') {
            let popedEle = stack.pop();
            if (pairs[popedEle] !== s[x]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};