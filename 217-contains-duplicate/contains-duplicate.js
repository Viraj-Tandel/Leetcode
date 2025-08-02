/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    /*
    
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (x !== y && nums[x] == nums[y]) {
                return true;
            }
        }
    }

    return false;

    */
    /*
    let freqMap = {};
    for (let x = 0; x < nums.length; x++) {
        if (freqMap[nums[x]]) {
            freqMap[nums[x]]++;
            return true;
        } else {
            freqMap[nums[x]] = 1;
        }
    }

    return false;
    */
    
    // TIME LIMIT EXCEED FOR ABOVE SOLUTION
    let seen = new Set();

    for (let x = 0; x < nums.length; x++) {
        if (seen.has(nums[x])) return true;
        seen.add(nums[x]);
    }

    return false;
};