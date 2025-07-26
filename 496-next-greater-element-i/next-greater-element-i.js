/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    // for (let x = 0; x < nums1.length; x++) {
    //     let elementFound = false;
    //     let max = -1;
    //     for (let y = 0; y < nums2.length; y++) {
    //         if (!elementFound && nums2[y] == nums1[x]) {
    //             elementFound = true;
    //         }
    //         if (elementFound && nums2[y] > nums1[x]) {
    //             max = nums2[y];
    //             break;
    //         }
    //     }
    //     nums1[x] = max;
    // }
    // return nums1;

    // let stack = [];
    // let nextGreaterMap = new Map();

    // for (let x = nums2.length - 1; x >= 0; x--) {
    //     let current = nums2[x];
    //     // Maintain a decreasing stack (pop smaller or equal elements)
    //     while (stack.length > 0 && current > stack[stack.length - 1]) {
    //         stack.pop();
    //     }
    //     // Top of stack is next greater if stack is not empty
    //     let nextGreater = stack.length === 0 ? -1 : stack[stack.length - 1];
    //     nextGreaterMap.set(current, nextGreater);
    //     stack.push(current);
    // }
    // // Build the result using the map for nums1
    // let result = nums1.map(num => nextGreaterMap.get(num));
    // return result;

    // ******* SOLVE AGAIN ----> 26/7/2025
    let stack = [];
    let nextGreaterMap = {};

    for (let x = nums2.length - 1; x >= 0; x--) {
        let current = nums2[x];

        // Maintining the decreasing stack to keep the next greater
        while (stack.length > 0 && current > stack[stack.length - 1]) {
            stack.pop();
        }

        nextGreaterMap[nums2[x]] = (stack.length == 0) ? -1 : stack[stack.length - 1];
        stack.push(nums2[x]);
    }
    return nums1.map((x) => nextGreaterMap[x]);
};