/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length == 0) {
        return [-1, -1];
    }
    if (nums.length == 1) {
        return nums[0] == target ? [0, 0] : [-1, -1];
    }

    let firstIndex = -1;
    let lastIndex = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            firstIndex = mid
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    if (firstIndex == -1)
        return [-1, -1];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            lastIndex = mid
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [firstIndex, lastIndex];
};
