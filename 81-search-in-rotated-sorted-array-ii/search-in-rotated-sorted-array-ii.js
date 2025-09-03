/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return true;

        // \U0001f539 Ambiguity breaker: can't decide which half is sorted
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
            continue;
        }

        // \U0001f539 Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;    // target in left
            } else {
                left = mid + 1;     // target in right
            }
        } else {
            // \U0001f539 Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;     // target in right
            } else {
                right = mid - 1;    // target in left
            }
        }
    }
    return false;
};
