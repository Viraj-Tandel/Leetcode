var isValid = function (s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let x = 0; x < s.length; x++) {
        if (s[x] in pairs) {
            // If it's an opening parenthesis, directly push it onto the stack
            stack.push(s[x]);
        } else {
            // If it's a closing parenthesis
            if (stack.length === 0) {
                // If stack is empty, there's no matching opening parenthesis
                return false;
            }
            let popedEle = stack.pop();
            // Check if the popped element matches the current closing parenthesis
            if (pairs[popedEle] !== s[x]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
