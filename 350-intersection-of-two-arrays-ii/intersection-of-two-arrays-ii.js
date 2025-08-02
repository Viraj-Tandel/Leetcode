/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // let resultMap = {};
    // let result = [];

    // for (let x = 0; x < nums1.length; x++) {
    //     if (resultMap[nums1[x]]) {
    //         ++resultMap[nums1[x]];
    //     } else {
    //         resultMap[nums1[x]] = 1;
    //     }
    // }

    // for (let x = 0; x < nums2.length; x++) {
    //     if (resultMap[nums2[x]] > 0) {
    //         result.push(nums2[x]);
    //         resultMap[nums2[x]]--;
    //     }
    // }

    // return result;

    let freqMap = {};

    for (let x = 0; x < nums1.length; x++) {
        freqMap[nums1[x]] = (freqMap[nums1[x]] || 0) + 1;
    }

    let result = [];
    for (let x = 0; x < nums2.length; x++) {
        if (freqMap[nums2[x]]) {
            --freqMap[nums2[x]];
            result.push(nums2[x]);
        }
    }

    return result;
};