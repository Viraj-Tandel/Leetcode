/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    let n = temperatures.length - 1;

    for (let x = n; x >= 0; x--) {
        let currentTemp = temperatures[x];
        while (stack.length > 0 && temperatures[x] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[x] = Math.abs(stack[stack.length - 1] - x);
        }
        stack.push(x);
    }

    return result;
};