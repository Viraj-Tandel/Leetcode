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
var deleteDuplicates = function (head) {
    if (!head || !head.next)
        return head;

    let slow = head;
    let fast = head.next;

    while (fast) {
        if (slow.val === fast.val) {
            // TODO DELETE THE NODE BY UPDATING NODE
            slow.next = fast.next;
            if (slow)
                fast = slow.next;
            else
                fast = null;
        } else {
            slow = slow.next;
            fast = fast.next;
        }
    }

    return head;
};