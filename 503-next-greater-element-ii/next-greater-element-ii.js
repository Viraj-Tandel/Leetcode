/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
    let result = new Array(arr.length).fill(-1);
    let n = arr.length;
    let stack = [];

    for (let x = (n * 2) - 1; x >= 0; x--) {
        let currentEle = arr[x % n];
        while (stack.length > 0 && stack[stack.length - 1] <= currentEle) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[x % n] = stack[stack.length - 1];
        }
        stack.push(currentEle);
    }

    return result;
};