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
var removeNodes = function (head) {
    if (!head)
        return head;

    let reverse = reverseLL(head);
    let newHead = null;
    let MAX_VALUE = -Infinity;
    let prev = null;

    while (reverse) {
        if (reverse.val >= MAX_VALUE) {
            let newNode = new ListNode(reverse.val);
            if (prev == null) {
                newHead = newNode;
            } else {
                prev.next = newNode;
            }
            prev = newNode;
            MAX_VALUE = reverse.val;
        }
        reverse = reverse.next;
    }
    return reverseLL(newHead);
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