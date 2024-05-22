/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    if (!operations.length) {
        return;
    }

    let resultStack = [];
    let top = -1;

    for (let x = 0; operations[x]; x++) {
        let op = operations[x];
        if (op === '+' || op === 'D' || op === 'C') {
            // TODO perform operation
            switch (op) {
                case 'C':
                    // resultStack.pop();
                    resultStack[top] = null;
                    top--;
                    break;
                case 'D':
                    resultStack.push(resultStack[resultStack.length - 1] * 2)
                    // resultStack[resultStack.length-1] = resultStack[resultStack.length-1]*2;
                    let score = resultStack[top] * 2;
                    resultStack[++top] = score;
                    break;
                case '+':
                    let score1 = resultStack[top];
                    let score2 = resultStack[top - 1];
                    resultStack[++top] = score1 + score2;
            }
        } else {
            // TODO push on stack
            // resultStack.push(Number(operations[x]));
            resultStack[++top] = Number(op);
        }
    }

    let sum = 0;

    for (let x = resultStack.length - 1; x >= 0; x--) {
        let ele = resultStack[x];
        if (ele) sum += ele;
    }

    return sum;
};