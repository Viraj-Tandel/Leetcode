/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // for(let x = 0; x <nums.length; x++){
    //     if(nums[x] == 0){
    //         for(let y = x + 1; y < nums.length; y++){
    //             if(nums[y] !== 0){
    //                 nums[x] = nums[y];
    //                 nums[y] = 0;
    //                 break;
    //             }
    //         }
    //     }
    // }

    let insertPos = 0;
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] !== 0) {
            nums[insertPos] = nums[x];
            insertPos++;
        }
    }

    for (let x = insertPos; x < nums.length; x++) {
        nums[x] = 0;
    }
};