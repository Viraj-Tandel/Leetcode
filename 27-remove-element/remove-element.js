/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length === 0) 
        return 0;

    let iterator;
    for(iterator = 0; iterator < nums.length; iterator++){
        if(nums[iterator] == val){
            nums.splice(iterator,1);
            iterator--;
        }
    }

    return iterator;
};