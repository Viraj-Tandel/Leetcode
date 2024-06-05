/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) {
        return;
    }

    let stack = [];
    let result = [];
    let size = nums2.length - 1;
    let top = -1;
    let map = {};

    for (let x = size; x >= 0; x--) {
        // Pop elements from stack that are less than or equal to the current element
        while (top !== -1 && stack[top] <= nums2[x]) {
            top--;
        }

        // If stack is not empty, the top element is the next greater element
        if (top !== -1) {
            result[x] = stack[top];
        } else {
            result[x] = -1;
        }

        // Push current element to the stack
        stack[++top] = nums2[x];

        // Map the current element to its next greater element
        map[nums2[x]] = result[x];
    }
    result = [];

    for (let x = 0; nums1[x] || nums1[x] === 0; x++) {
        result[x] = map[nums1[x]];
    }

    return result;
};