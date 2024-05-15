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
    if (!head)
        return head;
    let result = [];

    while (head) {
        result.push(findGreaterNode(head, head.val))
        head = head.next;
    }

    return result;
};

function findGreaterNode(head, target) {
    let dummy = head;

    while (dummy) {
        if (dummy.val > target) {
            break;
        }
        dummy = dummy.next;
    }
    
    if (!dummy)
        return 0;

    return dummy.val;
}