/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    let map = {
        "+": (a, b) => (b + a),
        "-": (a, b) => (b - a),
        "/": (a, b) => (b / a),
        "*": (a, b) => (b * a),
    }

    for (let x = 0; x < tokens.length; x++) {

        if (map[tokens[x]]) {
            let op2 = stack.pop();
            let op1 = stack.pop();
            let result = map[tokens[x]](op2, op1);
            console.log(result);
            stack.push(Math.trunc(result));
        } else {
            stack.push(Number(tokens[x]));
        }
    }

    return Number(stack.pop());
};