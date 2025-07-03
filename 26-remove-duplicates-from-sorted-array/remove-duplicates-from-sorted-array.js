/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let insertPos = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[insertPos]) {
            insertPos++;
            nums[insertPos] = nums[i];
        }
    }

    return insertPos + 1;
};
