/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stringArray = s.split("");
    let resultStack = [];
    for (let x = 0; x < stringArray.length; x++) {
        if (stringArray[x] == '(' || stringArray[x] == '{' || stringArray[x] == '[') {
            resultStack.push(stringArray[x]);
        } else if (stringArray[x] == ')' || stringArray[x] == '}' || stringArray[x] == ']') {
            if (resultStack[resultStack.length - 1] === '(' && stringArray[x] === ')') {
                resultStack.pop();
            } else if (resultStack[resultStack.length - 1] === '{' && stringArray[x] === '}') {
                resultStack.pop();
            } else if (resultStack[resultStack.length - 1] === '[' && stringArray[x] === ']') {
                resultStack.pop();
            } else {
                return false;
            }
        }
    }

    return resultStack.length === 0;
};