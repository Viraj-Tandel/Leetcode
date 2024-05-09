/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) return head;
    let dummy = new ListNode(-1);
    let ptr = dummy;
    let current = head;
    while (current) {
        if (current.val < x) {
            ptr.next = new ListNode(current.val);
            ptr = ptr.next;
        }
        current = current.next;
    }
    current = head;
    while (current) {
        if (current.val >= x) {
            ptr.next = new ListNode(current.val);
            ptr = ptr.next;
        }
        current = current.next;
    }
    return dummy.next;
};