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
    let list = [];
    let current = head;

    while (current) {
        list.push(current.val);
        current = current.next;
    }

    let result = new Array(list.length).fill(0);
    let stack = [];
    for (let x = 0; x < list.length; x++) {
        while (stack.length && list[x] > list[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = list[x];
        }
        stack.push(x);
    }

    return result;
};