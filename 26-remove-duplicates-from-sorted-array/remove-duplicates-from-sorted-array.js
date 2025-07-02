/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0 || nums.length === 1) {
        return nums;
    }

    let uniqueIndex = 0;

    for (let x = 0; x < nums.length; x++) {
        if (nums[uniqueIndex] !== nums[x]) {
            nums[uniqueIndex + 1] = nums[x];
            uniqueIndex++;
        }
    }
    return uniqueIndex + 1;
};