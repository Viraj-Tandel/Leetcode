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
    if (!l1 && !l2)
        return null;

    let reverseL1 = reverseLL(l1);
    let reverseL2 = reverseLL(l2);
    let resultLL = new ListNode(-1);
    let dummy = resultLL;
    let carry = 0;

    while (reverseL1 || reverseL2 || carry) {
        const sum = (reverseL1 ? reverseL1.val : 0) + (reverseL2 ? reverseL2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        if (!dummy.next) {
            dummy.next = new ListNode(sum % 10);
        }
        dummy = dummy.next;

        // Move to the next nodes
        if (reverseL1) reverseL1 = reverseL1.next;
        if (reverseL2) reverseL2 = reverseL2.next;
    }

    return reverseLL(resultLL.next);
};

function reverseLL(head) {
    let p = head;
    let q = r = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }

    return q;
}