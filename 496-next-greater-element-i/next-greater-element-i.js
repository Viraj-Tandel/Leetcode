/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let helperMap = new Map();
    let result = [];
    for (let x = 0; x < nums2.length; x++) {
        result.push(findNextGreater(x, nums2));
    }

    for (let x = 0; x < nums2.length; x++) {
        helperMap.set(nums2[x], result[x]);
    }

    result = [];

    for (let x = 0; x < nums1.length; x++) {
        result.push(helperMap.get(nums1[x]));
    }

    return result;

};

function findNextGreater(curIndex, arr) {
    let targetEle = arr[curIndex];
    for (let x = curIndex + 1; x < arr.length; x++) {
        if (arr[x] > targetEle) {
            return arr[x];
        }
    }
    return -1;
}