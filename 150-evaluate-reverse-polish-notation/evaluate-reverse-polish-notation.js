/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (!tokens.length)
        return tokens;

    let stackTop = -1;
    let stack = [];

    for (let x = 0; tokens[x]; x++) {
        if ((tokens[x] === '+' || tokens[x] === '*' || tokens[x] === '-' || tokens[x] === '/')) {
            // TODO perform operation on first two elements of stack
            let second = parseInt(stack.pop());
            let first = parseInt(stack.pop());
            let result;
            switch (tokens[x]) {
                case '+':
                    result = first + second;
                    break;
                case '-':
                    result = first - second;
                    break;
                case '*':
                    result = first * second;
                    break;
                case '/':
                    if(first/second > 0)
                        result = Math.floor(first / second);
                    else
                        result = Math.ceil(first / second);
                    break;
            }
            stack.push(result);

        } else {
            // TODO push into stack
            stack.push(tokens[x]);
        }
    }
    return stack.pop();
};