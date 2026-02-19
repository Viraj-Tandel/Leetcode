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
    let cur = head;
    let result = [];
    let stack = [];

    while (cur) {
        nums.push(cur.val);
        cur = cur.next;
    }

    for (let x = nums.length - 1; x >= 0; x--) {
        let temp = nums[x];

        while (stack.length && stack[stack.length - 1] <= temp) {
            stack.pop();
        }
        result[x] =(stack.length) ? stack[stack.length - 1] : 0;                                   
        stack.push(temp);
    }

    return result;
};