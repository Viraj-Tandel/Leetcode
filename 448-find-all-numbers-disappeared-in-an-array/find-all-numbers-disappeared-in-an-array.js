/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    // *** Brute Force Approch ----> TLE

    // let result = [];
    // for (let x = 1; x <= nums.length; x++) {
    //     if (nums.indexOf(x) == -1) {
    //         result.push(x);
    //     }
    // }
    // return result;

    // let result = [];
    // let resultMap = {};

    // // * build a result map
    // for (let x = 0; x < nums.length; x++) {
    //     if (resultMap[nums[x]]) {
    //         resultMap[nums[x]] = resultMap[nums[x]] + 1;
    //     } else {
    //         resultMap[nums[x]] = 1;
    //     }
    // }
    // // build result set
    // for (let x = 1; x <= nums.length; x++) {
    //     if (!resultMap[x]) {
    //         result.push(x);
    //     }
    // }

    // return result;

    for (let x = 0; x < nums.length; x++) {
        let index = Math.abs(nums[x]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }
    let result = [];

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] > 0) {
            result.push(x + 1);
        }
    }
    return result;
};