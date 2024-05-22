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
                    if (top >= 0) {
                        top--;
                    }
                    break;
                case 'D':
                    if (top >= 0) {
                        let score = resultStack[top] * 2;
                        top++;
                        resultStack[top] = score;
                    }
                    break;
                case '+':
                    let score1 = resultStack[top];
                    let score2 = resultStack[top - 1];
                    resultStack[++top] = score1 + score2;
            }
        } else {
            resultStack[++top] = Number(op);
        }
    }

    let sum = 0;

    for (let x = top; x >= 0; x--) {
        sum += resultStack[x];
    }

    return sum;
};