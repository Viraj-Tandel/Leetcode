/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let result = [];
    let stack = [];
    let n = temperatures.length - 1;

    for (let x = n; x >= 0; x--) {
        let currentTemp = temperatures[x];

        while (stack.length > 0 && stack[stack.length - 1][0] <= currentTemp) {
            stack.pop();
        }

        if (stack.length == 0) {
            result[x] = 0;
        } else {
            result[x] = Math.abs(stack[stack.length - 1][1] - x);
        }

        stack.push([currentTemp, x]);
    }

    return result;
};