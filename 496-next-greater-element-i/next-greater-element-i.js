/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    for (let x = 0; x < nums1.length; x++) {
        let elementFound = false;
        let max = -1;
        for (let y = 0; y < nums2.length; y++) {
            if (!elementFound && nums2[y] == nums1[x]) {
                elementFound = true;
            }
            if (elementFound && nums2[y] > nums1[x]) {
                max = nums2[y];
                break;
            }
        }
        nums1[x] = max;
    }
    return nums1;
};