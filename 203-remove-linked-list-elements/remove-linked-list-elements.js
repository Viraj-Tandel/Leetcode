/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head)
        return head;

    let dummy = new ListNode(-1, head);
    let cur = head;
    let prev = dummy;

    while (cur) {
        if (cur.val === val) {
            // TODO DELETE NODE
            prev.next = cur.next;
            cur = cur.next;
        } else {
            cur = cur.next;
            prev = prev.next;
        }
    }

    return dummy.next;
};