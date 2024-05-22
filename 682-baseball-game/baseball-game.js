/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    if (!operations.length) {
        return;
    }

    let resultStack = [];

    for (let x = 0; operations[x]; x++) {
        if (operations[x] === '+' || operations[x] === 'D' || operations[x] === 'C') {
            // TODO perform operation
            switch (operations[x]) {
                case 'C':
                    resultStack.pop();
                    break;
                case 'D':
                    resultStack.push(resultStack[resultStack.length - 1] * 2)
                    // resultStack[resultStack.length-1] = resultStack[resultStack.length-1]*2;
                    break;
                case '+':
                    let length = resultStack.length;
                    let score1 = resultStack[length - 1];
                    let score2 = resultStack[length - 2];
                    resultStack.push(score1 + score2);
            }
        } else {
            // TODO push on stack
            resultStack.push(Number(operations[x]));
        }
    }

    let sum = 0;

    for (let x = resultStack.length - 1; x >= 0; x--) {
        sum += resultStack[x];
    }

    return sum;
};