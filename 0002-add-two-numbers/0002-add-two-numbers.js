/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let carry = 0;
    let p = l1;
    let q = l2;
    let result = dummy;
    while (p !== null || q !== null || carry) {
        const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry;
        carry = Math.floor(sum / 10);

        // Reuse existing nodes if possible
        if (!result.next) {
            result.next = new ListNode(sum % 10);
        } 
        // else {
        //     result.next.val = sum % 10;
        // }
        result = result.next;

        // Move to the next nodes
        if (p) p = p.next;
        if (q) q = q.next;
    }
    return dummy.next;
};