/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    if (!head)
        return head;

    let reverseList = reverseLL(head);
    let ptr = reverseList;
    let carry = 0;
    let prev = null;

    while (ptr) {
        let doubleValue = ptr.val * 2 + carry;
        ptr.val = doubleValue % 10;

        if (doubleValue > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        prev = ptr;
        ptr = ptr.next;
    }

    if (carry)
        prev.next = new ListNode(1);

    return reverseLL(reverseList);
};

// function reverse linked list
function reverseLL(head) {
    if (!head)
        return head;

    let p = head;
    let q = null;
    let r = null;

    while (p) {
        r = q;
        q = p;
        p = p.next;
        q.next = r;
    }

    return q;
}