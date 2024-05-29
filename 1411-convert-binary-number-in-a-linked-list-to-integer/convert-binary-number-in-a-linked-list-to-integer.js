/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    if (!head)
        return head;

    let binaryString = "";

    while (head) {
        binaryString = binaryString + head.val;
        head = head.next;
    }

    return parseInt(binaryString, 2);
};