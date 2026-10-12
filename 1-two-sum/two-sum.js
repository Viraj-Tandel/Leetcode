/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};

    for (let x = 0; x < nums.length; x++) {
        map[nums[x]] = x;
    }


    for (let x = 0; x < nums.length; x++) {
        let targetSearch = target - nums[x];

        if (map[targetSearch] && map[targetSearch] !== x) {
            return [x, map[targetSearch]];
        }
    }
};