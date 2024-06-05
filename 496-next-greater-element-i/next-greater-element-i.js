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
    let map = new Map();

    for (let x = size; x >= 0; x--) {
        if (top !== -1) {
            // CHECK TOP is greater than current element
            if (stack[top] > nums2[x]) {
                result[x] = stack[top];
                stack[++top] = nums2[x];
            } else {
                // WE NEED TO POP THE ELEMENTS
                while (top !== -1 && stack[top] <= nums2[x]) {
                    top--;
                }
                if (top !== -1) {
                    result[x] = stack[top];
                    stack[++top] = nums2[x];
                } else {
                    result[x] = -1;
                    stack[++top] = nums2[x];
                }
            }
        } else {
            // TODO push it on stack
            stack[++top] = nums2[x];
            result[x] = -1;
        }
        map.set(nums2[x], result[x]);
    }
    return nums1.map((number) => map.get(number));
};