/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // nums1 = [...new Set(nums1)];
    // nums2 = [...new Set(nums2)];

    // let resultMap = {};

    // for (let x = 0; x < nums1.length; x++) {
    //     if (resultMap[nums1[x]]) {
    //         resultMap[nums1[x]]++;
    //     } else {
    //         resultMap[nums1[x]] = 1;
    //     }
    // }

    // for (let x = 0; x < nums2.length; x++) {
    //     if (resultMap[nums2[x]]) {
    //         resultMap[nums2[x]]++;
    //     } else {
    //         resultMap[nums2[x]] = 1;
    //     }
    // }

    // let result = [];
    // for (let x in resultMap) {
    //     if (resultMap[x] > 1) {
    //         result.push(Number(x));
    //     }
    // }

    // return result;

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
};