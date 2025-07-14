/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let xor = 0;

    for (let x = 0; x < nums.length; x++) {
        xor = xor ^ nums[x];
    }

    return xor;
};