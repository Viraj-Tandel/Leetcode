/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {

    let nums = [];
    let current = head;

    while (current) {
        nums.push(current.val);
        current = current.next;
    }

    let ans = new Array(nums.length - 1).fill(0);
    let stack = [];
    let length = nums.length;

    for (let x = length - 1; x >= 0; x--) {
        while (stack.length && stack[stack.length - 1] <= nums[x]) {
            stack.pop();
        }

        ans[x] = stack.length ? stack[stack.length - 1] : 0;
        stack.push(nums[x]);
    }

    return ans;
};