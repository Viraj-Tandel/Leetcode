/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const arr = [...nums, ...nums];
    let result = new Array(arr.length).fill(-1);
    let n = arr.length;
    let stack = [];

    for (let x = n - 1; x >= 0; x--) {
        let currentEle = arr[x];
        while (stack.length > 0 && stack[stack.length - 1] <= currentEle) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[x] = stack[stack.length - 1];
        }
        stack.push(currentEle);
    }

    return result.slice(0, nums.length);
};