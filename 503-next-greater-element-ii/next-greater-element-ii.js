/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    if (nums.length === 0) {
        return;
    }

    let stack = [];
    let result = [];
    let size = (nums.length * 2) - 1;
    let top = -1;
    let map = {};

    for (let y = nums.length * 2 - 1; y >= 0; y--) {
        let x = y % nums.length;
        // Pop elements from stack that are less than or equal to the current element
        while (top !== -1 && stack[top] <= nums[x]) {
            top--;
        }

        // If stack is not empty, the top element is the next greater element
        if (top !== -1) {
            result[x] = stack[top];
        } else {
            result[x] = -1;
        }

        // Push current element to the stack
        stack[++top] = nums[x];

        // Map the current element to its next greater element
        map[nums[x]] = result[x];
    }
    // result = [];

    // for (let x = 0; nums1[x]; x++) {
    //     result[x] = map.get(nums1[x]);
    // }

    return result;
};