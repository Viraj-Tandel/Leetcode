/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxConsecutiveOne = 0;
    let counterOne = 0;

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] === 1) {
            counterOne++;
            maxConsecutiveOne = Math.max(maxConsecutiveOne, counterOne);
        } else {
            counterOne = 0;
        }
    }
    return maxConsecutiveOne;
}