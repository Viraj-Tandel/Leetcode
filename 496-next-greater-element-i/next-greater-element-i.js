/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let result = [];
    let n = nums2.length - 1;
    let stack = [];

    for(let x = n; x>= 0; x--){
        while(stack.length > 0 && stack[stack.length - 1] < nums2[x]){
            stack.pop();
        }
        let ans = (stack.length> 0)?stack[stack.length - 1]:-1;
        map[nums2[x]] = ans;
        stack.push(nums2[x]);
    }

    return nums1.map((num) => map[num]);
};